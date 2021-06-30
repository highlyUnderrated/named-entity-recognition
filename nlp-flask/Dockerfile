# ***************************************************************************
# * Changelog										
# * All notable changes to this project will be documented in this file.	
# ***************************************************************************
# *
# * Author				: Arhaam Patvi
# *
# * Date created		: 11/01/2021
# *
# * Purpose			    : Dockerfile to build an image for nlp-flask
# *
# * Revision History	:
# *
# * Date			Author			    Jira			Functionality 
# * 
# *
# ***************************************************************************

FROM python:3.8.7-buster

WORKDIR /usr/src/app

COPY . ./

RUN bash requirements.sh

EXPOSE 30080 

ENTRYPOINT [ "python" ] 

CMD [ "server.py" ] 