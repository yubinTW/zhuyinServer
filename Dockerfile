FROM node:12

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8666
CMD [ "node", "index.js" ]
