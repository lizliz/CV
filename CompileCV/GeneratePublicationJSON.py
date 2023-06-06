'''
Turns the MyPublications.bib file into Publications.json file

This should replace the index.json file inside the
contents/math/research folder in the website

Info on the bibtexparser package here:
https://bibtexparser.readthedocs.io/en/v0.6.2/bibtexparser.html

'''

import bibtexparser as BIB
from bibtexparser.bwriter import BibTexWriter
from bibtexparser.bibdatabase import BibDatabase
import json
import os

def cleanString(x):

	x = x.replace("Fr'echet", "Fr&eacute;chet")
	x = x.replace("Fr\\'echet", "Fr&eacute;chet")
	x = x.replace("Am{\\'{e}}zquita", "Am&eacute;zquita")
	x = x.replace('{','')
	x = x.replace('}','')
	x = x.replace('\\"o', 'oe')
	x = x.replace('\\&', '&')
	x = x.replace('\\#', '#')
	# x = x.replace('\\', '')
	return x

def flipOrder(y):
    if ',' in y:
        Y = y.split(', ')
        Y.reverse()
        y = ' '.join(Y)
    return y


def cleanAuthors(x):

    x = x.split(' and ')
    x = [flipOrder(y) for y in x]
    fullList = ', '.join(x[:-1])
    if len(x) >= 3:
        fullList += ', and ' + x[-1]
    elif len(x) == 2:
        fullList += ' and ' + x[-1]
    else:
        fullList = x[0]

    return fullList


def convertToJSON():
	with open('MyPublications.bib') as bibtex_file:
		bibtex_database = BIB.load(bibtex_file)


	# Sort entries reverse by year

	# Get rid of preprints and other
	def isPreprint(X):
		if 'arxiv' not in X['keywords'] and 'arXiv' not in X['keywords']:
			if 'preprint' in X['keywords'] or 'other' in X['keywords']:
					return True
		if 'dataset' in X['keywords']:
			return True
		if 'not_on_website' in X['keywords']:
			return True
	# isPreprint = lambda X: X['keyword'] == 'preprint'
	bibtex_database.entries = [X for X in bibtex_database.entries if not isPreprint(X)]

	# Pull year from each entry
	# getYear = lambda X: int(X['year'])
	def getYear(X):
		if 'year' in X.keys():
			a = int(X['year'])
		else:
			try:
				# arxiv's date version
				a = int(X['date'][:4])
			except:
				pass

		return a

	def getMonth(X):
		if 'date' in X.keys():
			mo = int(X['date'].split('-')[1])
		else:
			mo = 0

		return mo

	# Sort by year
	bibtex_database.entries = sorted(bibtex_database.entries,
				key = lambda X:  (getYear(X),getMonth(X)),
				reverse = True)


	# d is the top level entry for the json file
	d = {'paperInfo':[]}

	# Each entry for the json file has keys:
	# ['originalLink', 'title', 'pdfLink', 'abstract', 'venue', 'date', 'collapseLabel', 'authors', 'bibtex']

	for X in bibtex_database.entries:
		paperjson = {}

		# ---------Get the date-------------
		try:
			paperjson['date'] = getYear(X)

		except KeyError:
			print(X['ID'], 'is missing the year')


		# --------- Get the published link  --------------
		try:
			# Assuming we have a DOI
			# Example: https://doi.org/10.1016/j.ymssp.2015.09.046
			# linkPre = "<a class = 'extLink' href='https://doi.org/"
			# linkPost = "'> Publisher Website </a>"
			# paperjson['publishedLink'] = linkPre + X['doi'] + linkPost
			linkPre = "https://doi.org/"

			link = linkPre + X['doi']

			# bioRxiv still has a doi, so ignore if thats the journal
			if 'journal' not in X.keys():
				paperjson['publishedLink'] = link
			if 'journal' in X.keys() and 'bioRxiv' not in X['journal']:
				paperjson['publishedLink'] = link

		except:
			try:
				paperjson['publishedLink'] = X['url']


			except KeyError:
				print(X['ID'], 'is missing a published link')


		try:
			if 'eprinttype' in X.keys() and X['eprinttype'] == 'arXiv':

				linkPre = "https://arxiv.org/abs/"
				paperjson['arXivLink'] = linkPre + X['eprint']
			elif 'archiveprefix' in X.keys() and X['archiveprefix'] == 'arXiv':
				linkPre = "https://arxiv.org/abs/"
				paperjson['arXivLink'] = linkPre + X['eprint']

			elif X['eprinttype'] == 'bioRxiv':
				print(X['ID'], 'is bioRxiv')
				linkPre = "https://doi.org/"
				paperjson['arXivLink'] = linkPre + X['doi']
			else:
				print(X['ID'], ": I don't recognize the eprint type")
		except:
			print(X['ID'], 'is missing an arXiv link')


		# ---------------Clean up the title for html ------------
		try:
			paperjson['title'] = cleanString(X['title'])
		except KeyError:
			print(X['ID'], 'is missing the title')
			paperjson['title'] = ''
			paperjson['pdfLink']  = X['link']
		except KeyError:
			print(X['ID'], 'is missing the url')


		# ------------------
		# ---Add venue: first look for journal,
		# ---then booktitle, then eprinttype (if arxiv)
		# ------------------
		if 'journal' in X.keys():
			paperjson['venue'] = cleanString(X['journal'])
		elif 'booktitle' in X.keys():
			paperjson['venue'] = cleanString(X['booktitle'])
		elif 'eprinttype' in X.keys() or 'archiveprefix' in X.keys():
			if 'eprinttype' in X.keys():
				try:
					s = X['eprinttype'] + ':' + X['eprint']
				except:
					s = X['eprinttype'] + ':' + X['doi'] # should get here if bioRxiv so doesnt have eprint
			elif 'archiveprefix' in X.keys():
				s = X['archiveprefix'] + ':' + X['eprint']
			paperjson['venue'] = cleanString(s)
		else:
			print(X['ID'], 'is missing the journal, or booktitle')


		# ------------------
		# ---Add collapseLabel
		# --- No longer necessary?
		# ------------------
		paperjson['collapseLabel']  = X['ID']

		# ------------------
		# ---Add authors
		# --- TODO make nicer, maybe even add links to
		# --- their websites?
		# ------------------
		paperjson['authors'] = cleanAuthors( cleanString(X['author']) )

		# ------------------
		# ---Add abstract
		# ------------------
		try:
			paperjson['abstract']  = cleanString(X['abstract'])
		except KeyError:
			print(X['ID'], 'is missing an abstract')

		# ------------------
		# ---Add image
		# ------------------

		if 'image' in X.keys():
			paperjson['image'] = '../img/' + X['image']
			paperjson['altText'] = 'A figure from the paper.'
		else:
			print(X['ID'], 'is missing an image')

		# ------------------
		# ---Remove keywords
		# ---Not sure what's going on but this isn't working like I expect
		# ------------------

		keywordsToRemove = ['arXiv',
							'arxiv',
							'inSubmission',
							'conferenceTop'	]
		for key in keywordsToRemove:
			try:
				paperjson['keywords'].pop(key)
			except KeyError:
				pass

		# ------------------
		# ---Add bibtex after removing
		# ---unneeded/unwanted keys
		# ------------------
		singleDatabase = BibDatabase()
		keysToRemove = ['abstract',
						'owner',
						'timestamp',
						'keyword',
						'file',
						'annote',
						'review',
						'note',
						'image',
						'__markedentry',
						'folderlocation',
						'comment',
						'authorwithsymbols',]
		for key in keysToRemove:
			try:
				X.pop(key)
			except KeyError:
				pass

		singleDatabase.entries = [X,]

		bibstring = BIB.dumps(singleDatabase)
		bibstring = bibstring.replace('\n', '<br>')
		paperjson['bibtex'] = bibstring






		d['paperInfo'].append(paperjson)


	jsonFileName = 'papersNew.json'

	with open(jsonFileName,'w') as file:
		json.dump(d,file,sort_keys = True, indent=4, separators = (',',': '))

	# Makes the version for Lindsey's verison of the website
	X = json.dumps(d,sort_keys = True, indent=4, separators = (',',': '))
	Y = 'var researchJSON = ' + X

	with open('research.js',"w") as file:
		file.write(Y)


	# os.system('cp papersNew.json ~/Dropbox/Website/ElizabethMunch/contents/math/research/index.json')
	os.system('cp research.js ../Website/ElizabethMunch/json/research.js')


	return d, bibtex_database



if __name__ == '__main__':
	convertToJSON()
