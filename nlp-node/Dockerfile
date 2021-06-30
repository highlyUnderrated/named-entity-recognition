# ***************************************************************************
# * Changelog										
# * All notable changes to this project will be documented in this file.	
# ***************************************************************************
# *
# * Author				: Arhaam Patvi
# *
# * Date created		: 11/01/2021
# *
# * Purpose			    : Dockerfile to build an image for nlp-node
# *
# * Revision History	:
# *
# * Date			Author			    Jira			Functionality 
# * 
# *
# ***************************************************************************

FROM node:12.20.0-alpine3.10

WORKDIR /usr/src/app

COPY package*.json ./
COPY ./certs ./
RUN npm install -g nodemon --silent
RUN npm install --silent

COPY . .

EXPOSE 5000
CMD ["nodemon",".","resource/application_dev_docker.properties"]
