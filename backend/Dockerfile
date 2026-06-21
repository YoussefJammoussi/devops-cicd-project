FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

USER node

EXPOSE 5000

CMD ["node", "server.js"]
