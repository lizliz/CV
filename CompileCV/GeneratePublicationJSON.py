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



##----
# Main code to create the JSON file. 
##----

def convertToJSON():
	with open('MyPublications.bib') as bibtex_file:
		bibtex_database = BIB.load(bibtex_file)


	# This script gets rid of the things that I don't want to have linked on the website. 
	def keepOnWebsite(X):

		if 'not_on_website' in X['keywords']:
			return False
		elif 'dataset' in X['keywords']:
			return False
		elif 'code' in X['keywords']:
			return False
		# elif 'not_on_website' in X['keywords']:
			# return False
		else:
			return True
	bibtex_database.entries = [X for X in bibtex_database.entries if keepOnWebsite(X)]





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
			mo = 13

		return mo

	def getKeywords(X):
		if 'website-keywords' in X.keys():
			kw = X['website-keywords']
			if isinstance(kw, str):
				# Split on comma, strip whitespace
				return [k.strip() for k in kw.split(',') if k.strip()]
			elif isinstance(kw, list):
				return kw
			else:
				return []
		else:
			return []

	# Sort by year
	bibtex_database.entries = sorted(bibtex_database.entries,
				key = lambda X:  (getYear(X),getMonth(X)),
				reverse = True)


	# d is the top level entry for the json file
	d = {'paperInfo':[]}

	#-- setup error list to print at the end--#
	errorlist = {'Missing year':[], 
					'Missing published link': [],
					'Missing arXiv link': [],
					'Missing image': [],
					'Missing venue': [],
					'Missing abstract':[],
					'Missing URL': [],
	}
	
	# Each entry for the json file has keys:
	# ['originalLink', 'title', 'pdfLink', 'abstract', 'venue', 'date', 'collapseLabel', 'authors', 'bibtex', 'keywords']
	for X in bibtex_database.entries:
		paperjson = {}



		# ---------Get the date-------------
		try:
			paperjson['date'] = getYear(X)

		except KeyError:
			errorlist['Missing year'].append(X['ID'])

		# ---------Get the keywords-------------
		try:
			paperjson['keywords'] = getKeywords(X)

		except KeyError:
			pass

		# --------- Get the published link  --------------

		def checkPublished(X):
			if 'inSubmission' in X['keywords']:
				return False
			elif 'other' in X['keywords']:
				return False
			elif 'purgatory' in X['keywords']:
				return False
			else:
				return True
		if checkPublished(X):
			# This means we're not going to run this for both preprints
			if 'doi' in X.keys():
				# Assuming we have a DOI
				# Example: https://doi.org/10.1016/j.ymssp.2015.09.046
				# linkPre = "<a class = 'extLink' href='https://doi.org/"
				# linkPost = "'> Publisher Website </a>"
				# paperjson['publishedLink'] = linkPre + X['doi'] + linkPost
				linkPre = "https://doi.org/"

				link = linkPre + X['doi']
				paperjson['publishedLink'] = link
			else:
				try:
					paperjson['publishedLink'] = X['url']


				except KeyError:
					errorlist['Missing published link'].append(X['ID'])

		# --------- Add the arxiv or biorxiv link  --------------
		# Note this should still be added even for submitted papers

		try:
			if 'eprinttype' in X.keys() and X['eprinttype'] == 'arXiv':

				linkPre = "https://arxiv.org/abs/"
				paperjson['arXivLink'] = linkPre + X['eprint']
			elif 'archiveprefix' in X.keys() and X['archiveprefix'] == 'arXiv':
				linkPre = "https://arxiv.org/abs/"
				paperjson['arXivLink'] = linkPre + X['eprint']

			elif X['eprinttype'] == 'bioRxiv':
				linkPre = "https://doi.org/"
				paperjson['arXivLink'] = linkPre + X['eprint']
			else:
				print(X['ID'], ": I don't recognize the eprint type")
				errorlist['Missing arXiv link'].append(X['ID'])
		except:
			errorlist['Missing arXiv link'].append(X['ID'])


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
		# ---Add venue: 
		# This should be arxiv or biorxiv if a preprint. 
		# If published, then journal or booktitle
		# ------------------
		if not checkPublished(X):
			try: 
				if 'eprinttype' in X.keys():
					s = X['eprinttype'] + ':' + X['eprint']
				elif 'archiveprefix' in X.keys():
					s = X['archiveprefix']+ ':' + X['eprint']
				paperjson['venue'] = cleanString(s)
			except:
				errorlist['Missing venue'].append(X['ID'])
				print(X['ID'], 'arxiv venue issue')
		else:
			if 'journal' in X.keys():
				paperjson['venue'] = cleanString(X['journal'])
			elif 'booktitle' in X.keys():
				paperjson['venue'] = cleanString(X['booktitle'])

			else:
				errorlist['Missing venue'].append(X['ID'])
				print(X['ID'], 'published venue issue')


		# ------------------
		# ---Add collapseLabel
		# ---I think this is from the old version so likely not necessary
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
			errorlist['Missing abstract'].append(X['ID'])

		# ------------------
		# ---Add image
		# ------------------

		if 'image' in X.keys():
			paperjson['image'] = '../img/' + X['image']
			paperjson['altText'] = 'A figure from the paper.'
		else:
			errorlist['Missing image'].append(X['ID'])

		# ------------------
		# ---Remove keywords
		# ---This isn't behaving
		# ---Insted just not including keywords in the bibtex at all
		# ------------------

		# keywordsToRemove = ['arXiv',
		# 					'arxiv',
		# 					'inSubmission',
		# 					'conferenceTop'	]
		# for key in keywordsToRemove:
		# 	try:
		# 		paperjson['keywords'].pop(key)
		# 	except KeyError:
		# 		pass

		# ------------------
		# ---Add bibtex after removing
		# ---unneeded/unwanted keys
		# ------------------
		singleDatabase = BibDatabase()
		keysToRemove = ['keywords',
		  				'abstract',
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

	# PRINT THE ERROR LIST
	print('++==++ ERRORS ++==++\n')
	for key in errorlist.keys():
		print(key, ': ')
		for id in errorlist[key]:
			print(id)
		print('--')


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
