FROM node

WORKDIR /app

COPY . .   /*Откуда * и куда */

RUN npm install

EXPOSE 3000

CMD [ "node", "db.json"]