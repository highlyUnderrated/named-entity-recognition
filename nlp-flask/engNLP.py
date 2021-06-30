# ***************************************************************************
# * Changelog										
# * All notable changes to this project will be documented in this file.	
# ***************************************************************************
# *
# * Author				: Akash Singh
# *
# * Date created		: 11/01/2021
# *
# * Purpose			    : English Flair NLP Extraction Script
# *
# * Revision History	:
# *
# * Date			Author			    Jira			Functionality 
# * 25/01/2021    Akash Singh          EC-680       Added English Test API
# ***************************************************************************
#
#Importing Flair Dependencies & Segtok Segmenter
from flair.data import Sentence
from flair.models import SequenceTagger
from segtok.segmenter import split_single
#Loading Flair "ner-ontonotes-fast" Model
tagger = SequenceTagger.load('ner-ontonotes-fast')

# Definition for NER Extraction
def ner(para):
    #Passing text to Sentence
    sentence = Sentence(para)

    # Run NER on sentence to identify Entities
    tagger.predict(sentence)

    #Initialising the default entities variables
    org=''
    money =0
    location=''
    product=''

    #Fetching the named entitites 
    for span in sentence.get_spans():
        entities = span.to_dict()
        for labl in entities['labels']:
            if labl.value == 'MONEY':
                money=entities['text']
            elif labl.value == 'ORG':
                org=org + entities['text'] + " "
            elif labl.value == 'PRODUCT':
                product=product + entities['text'] + " "
            elif labl.value == 'GPE':
                location=location + entities['text'] + " "

    #Creating a JSON response
    entity_json = {
        "money" : money,
        "location" : location,
        "details" : org + product
    }
    print(entity_json)
    #Sending back the response
    return entity_json

# Definition for NER Extraction - Testing
def testner(para):
    #Passing text to Sentence
    sentence = Sentence(para)

    # Run NER on sentence to identify Entities
    tagger.predict(sentence)

    #Initialising the default entities variables
    entities_list = []

    #Fetching the named entitites 
    # iterate over entities and print
    for entity in sentence.get_spans():
        entities_list.append(str(entity))

    #Sending back the response
    return entities_list