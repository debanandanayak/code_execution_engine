FROM node:alpine
RUN apk add build-base
RUN apk add --update python3 py3-pip
RUN apk add openjdk11
WORKDIR /usr/home/node1
COPY package.json .

RUN npm install

COPY . .
# CMD [ "npm", "run", "start" ]