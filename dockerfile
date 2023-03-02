FROM node:16

WORKDIR /application

COPY package.json ./
COPY package-lock.json /application

RUN npm install

COPY . .

CMD ["node", "server.js"]
