'''
Made by Liz Munch
elizabethmunch@gmail.com
7/23/13

Meant to convert json files from website
into a .tex file to create a CV

'''

import json
import os
import platform
import glob
import shutil
import numpy as np
import bibtexparser as BIB
from bibtexparser.bwriter import BibTexWriter
from bibtexparser.bibdatabase import BibDatabase


def bibRemoveAbstracts():

    with open('MyPublications.bib') as bibtex_file:
        B = BIB.load(bibtex_file)

    for X in B.entries:
        try:
            X.pop('abstract')
        except:
            pass

        # try:
        #     X['author'] = X['authorwithsymbols']
        #     print(X['author'])
        #     X.pop('authorwithsymbols')
        # except:
        #     pass

    writer = BibTexWriter()
    with open('MyPublications_NoAbstracts.bib', 'w') as bibfile:
        bibfile.write(writer.write(B))


# This should probably be removed now......
'''
def fetchFiles(websiteLocation = '/Dropbox/Website/ElizabethMunch'):
	homePath = os.path.expanduser('~')
	stringStart = 'cp ' + homePath + websiteLocation + '/contents/math/'
	os.system(stringStart + 'talks/index.json talks.json')
	os.system(stringStart + 'research/index.json papers.json')
'''


def writeCV(origfilename, newfilename):
    file = open(origfilename,'r')
    contents = file.readlines()
    file.close()

    #--Find the line to insert the talks--#
    C = np.array(contents)
    indexTalks = np.where(C == 'INSERT TALKS HERE\n')[0][0]
    talks = writeTalks()
    contents[indexTalks:indexTalks+1] = talks

    C = np.array(contents)
    indexTeach = np.where(C == 'INSERT TEACHING HERE\n')[0][0]
    teach = writeTeaching()
    contents[indexTeach:indexTeach+1] = teach

    try:
        os.remove(newfilename)
    except OSError:
        pass
    f = open(newfilename, 'w')
    f.writelines(contents)
    f.close()


def writeTalks(filename = 'talks.json'):
    f = open(filename,'r')
    data = json.load(f)
    f.close()

    Talks = data['talks']

    talkList = []
    # talkList.append('\\begin{list}{}{\leftmargin=1em}')
    # talkList.append('\itemsep -0.3em')
    talkList.append('\\begin{etaremune}')
    talkList.append('\n')

    for entry in Talks:
        if 'type' not in entry.keys() or  entry['type']!="poster":
            talkList.append('\item')
            string = ''
            string += '\emph{'

            if 'videoLink' in entry.keys():
                string += "\href{" + str(entry['videoLink']) + '}{'
                string += str(entry['title']) + '}'
            else:
                string += str(entry['title'])

            string += '}. '
            if 'type' in entry.keys():
                string += entry['type'] + ', '
            string += str(entry['venue']) + ', '
            string += str(entry['date']) + '. \n'
            talkList.append(string)
            # talkList.append( '\t ' + r'\vspace{4pt}' + '\n')
            talkList.append('\n')
    # talkList.append('\end{list}')
    talkList.append('\end{etaremune}')

    return talkList

def writeTeaching(filename = 'teaching.json'):

    f = open(filename,'r')
    teach = json.load(f)
    f.close()


    teachList = []
    for entry in teach:
        string = ''
        string += str(entry['CourseNum'])
        string += ' & '
        string += str(entry['CourseTitle'])
        string += ' & '
        string += str(entry['School'])
        string += ' & '
        if len(entry['Semester']) == 1:
            sem = entry['Semester'][0]
            string += str(sem['Semester']) + ', '
            string += str(sem['Year']) + '\n'
        else:
            string += r'\begin{tabular}{@{}c@{}} '
            for sem in entry['Semester']:
                string += str(sem['Semester']) + ', '
                string += str(sem['Year']) + r'\\'
            string = string[:-2]

            string += '\end{tabular}'
        string += ' & '
        if len(entry['Semester']) == 1:
            sem = entry['Semester'][0]
            string += str(sem['Eval']) + '\n'
        else:
            string += r'\begin{tabular}{@{}c@{}} '
            for sem in entry['Semester']:
                if sem['Eval']:
                    string += str(sem['Eval']) + r'\\'
                else:
                    string += r'\phantom{x}' + r'\\'
            string = string[:-2]

            string += '\end{tabular}'
        string += r'\\' + '\n'


        teachList.append(string)
        teachList.append(r'\hline'+'\n')


    return teachList


def main():
    os.system('cd CompileCV/')
    bibRemoveAbstracts()
    # fetchFiles()
    origname = 'LizCV-EDIT-ME.tex'
    CVname = 'LizCV.tex'
    writeCV(origname, CVname)
    # os.system('pdflatex LizCV.tex')
    # os.system('pdflatex LizCV.tex')
    # os.system('bibtex LizCV')
    # os.system('pdflatex LizCV.tex')
    # os.system('pdflatex LizCV.tex')
    os.system('latexmk -pdf LizCV.tex')

    if platform.system() == "Linux":
        # os.system('rm *.bbl')
        # os.system('rm *.blg')
        # os.system('rm *.aux')
        # os.system('rm *.log')
        os.system('latexmk -c')
        os.system('cp LizCV.pdf ../LizCV.pdf')
        os.system('cp LizCV.pdf ../Website/ElizabethMunch/pdf/Elizabeth-Munch-CV.pdf')
    elif platform.system() == 'Windows':

        for ending in ['bbl', 'blg', 'aux', 'log', 'fls', 'out', 'fdb_latexmk']:

            for file in glob.glob('*.'+ ending):
                os.remove(file)
        shutil.copy('LizCV.pdf', '..\\LizCV.pdf')
        shutil.copy('LizCV.pdf',  'C:\\Dropbox\\Website\\ElizabethMunch\\pdf\\Elizabeth-Munch-CV.pdf')

    else:
        print('Operating System Not Recognized....')






if __name__ == '__main__':
	main()
