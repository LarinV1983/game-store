FROM node

WORKDIR /shop

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node", "src/index.js"]