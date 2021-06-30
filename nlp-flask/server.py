# ***************************************************************************************************************
# * Changelog										
# * All notable changes to this project will be documented in this file.	
# ***************************************************************************************************************
# *
# * Author				: Akash Singh
# *
# * Date created		: 11/01/2021
# *
# * Purpose			    : English Flair NLP API
# *
# * Revision History	:
# *
# * Date			Author			    Jira			            Functionality 
# * 12/01/2021     Akash Singh         EC-583          Added Status Codes & Try-Except for Error Handling
# * 18/01/2021     Akash Singh         EC-636          Code Refactored to support NLP Node Layer
# * 25/01/2021     Akash Singh      EC-680, EC-672          Added English & Korean Test API
# ***************************************************************************************************************
#
#Importing koalanlp function from Korean Prediction Script
from predict import kornlp
#Importing KobertModelLoader function from Korean Prediction Script
from predict import kobertmodelloader
#Importing function for testing Korean NLP
from predict import testing_kornlp
#Importing English NLP function from engNLP
from engNLP import ner
#Importing English NLP Test function from engNLP
from engNLP import testner
# Importing Flask for creating a python server
from flask import Flask, request, abort
app = Flask(__name__)

# API for Korean NLP
@app.route('/nlp/ko', methods=['POST'])
def koreanextract():
    # Request Received
    print("Request Received")
    # Message for Named Entity Recognition
    text_for_ner = request.get_json()["messages"]
    if text_for_ner == "":
        #Creating a JSON response
        json_response = {
            "money" : "",
            "location" : "",
            "details" : ""
        }
        return json_response
    else:
        # Calling Extraction Script for Performing NER
        json_response = kornlp(text_for_ner)
        # Returning Response for API
        return json_response

# API for Testing Korean NLP
@app.route('/nlp/test/ko', methods=['POST'])
def kotestextract():
    # Request Received
    print("Request Received")
    # Message for Named Entity Recognition
    text_for_ner = request.get_json()["messages"]
    if text_for_ner == "":
        #Creating a JSON response
        json_response = {
            "output" : ""
        }
        return json_response
    else:
        # Calling Extraction Script for Performing NER
        json_response = {
            "output" : testing_kornlp(text_for_ner)
        }
        # Returning Response for API
        return json_response

# API for English NLP
@app.route('/nlp/en', methods=['POST'])
def englishextract():
    # Request Received
    print("Request Received")
    # Message for Named Entity Recognition
    text_for_ner = request.get_json()["messages"]
    # Calling Extraction Script for Performing NER
    json_response = ner(text_for_ner)
    # Returning Response for API
    return json_response

# API for English NLP - Testing
@app.route('/nlp/test/en', methods=['POST'])
def entestextract():
    # Request Received
    print("Request Received")
    # Message for Named Entity Recognition
    text_for_ner = request.get_json()["messages"]
    # Calling Extraction Script for Performing NER
    json_response = {
        "output" : testner(text_for_ner)
    }
    # Returning Response for API
    return json_response

if __name__ == '__main__':
    kobertmodelloader()
    from waitress import serve
    serve(app,port=30080)