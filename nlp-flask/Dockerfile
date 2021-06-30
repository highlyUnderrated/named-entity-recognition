
FROM python:3.8.7-buster

WORKDIR /usr/src/app

COPY . ./

RUN bash requirements.sh

EXPOSE 30080 

ENTRYPOINT [ "python" ] 

CMD [ "server.py" ] 