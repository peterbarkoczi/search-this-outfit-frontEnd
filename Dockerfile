FROM node:12.16.2-alpine3.11 as build-deps
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run-script test