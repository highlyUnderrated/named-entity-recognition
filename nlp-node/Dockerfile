
FROM node:12.20.0-alpine3.10

WORKDIR /usr/src/app

COPY package*.json ./
COPY ./certs ./
RUN npm install -g nodemon --silent
RUN npm install --silent

COPY . .

EXPOSE 5000
CMD ["nodemon",".","resource/application_dev_docker.properties"]
