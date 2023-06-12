FROM node

WORKDIR /shop

COPY package.json /shop

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "src/index.js"]