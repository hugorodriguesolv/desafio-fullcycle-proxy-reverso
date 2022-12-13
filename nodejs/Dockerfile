FROM node:alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm install ejs
RUN npm install mysql

EXPOSE 5000

CMD [ "node", "server.js" ]