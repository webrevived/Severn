FROM node:14-buster-slim

WORKDIR /frontend

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000
EXPOSE 24678
