# Named Entity Recognition

The code can perform Named Entity Recognition on two languages :

1. English
2. Korean

It can provide the functionality through two APIs. The API can be provided input in the form of text and output's JSON containing information about Poduct Details, Location & Money discussed. This is achieved through performing Named Entity Recognition on the input text. The NER is performed through - 

1. Flair NLP : Flair is an easy to use ready made package that has the ability to perform NER on input text. This package supports Languages such as English, German, Dutch & Polish. In here, we are using it for English.

2. KoBERT NER Model : KoBERT NER Model is used for performing NER on Korean Language. The Model was trained through dataset acquired from Transformers. The trained model is then used for performing NER through a prediction script.

### Key Features : 

* Named Entity Recognition
* Supports English & Korean
* Logger for monitoring Server Usage
* Supports HTTPS

---
## Getting Started | Setup
### Prerequisites

1. Python 3.8 [ Recommended Python 3.8.5 ]
2. NodeJS

[2 terminals required]

> Follow these steps for the ``First Terminal`` : 

1. Install Python Dependencies:

```
bash requirements.sh
```

2. Run the Python Server:

```
python3.8 server.py
```
`Note` : User needs to be in the directory `nlp-flask` for the above commands to work.

> Steps for the ``Second Terminal``:

1. Install NPM Packages:
```
npm install
```

2. Run the NPM Server:

```
npm start resource/application_dev.properties
```
`Note` : User needs to be in the directory `nlp-node` for the above commands to work.

---

## Usage

Once both the Servers are running, User can call the APIs mentioned below : 

1. For English

> https://`<Server-IP-Address>`:5000/nlp/en

1. For Korean

> https://`<Server-IP-Address>`:5000/nlp/ko

For the Performance Metrics Details : 

> https://`<Server-IP-Address>`:5000/nlp/precision/ko

---