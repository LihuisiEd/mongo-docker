FROM node:12

COPY [".", "/usr/src/"]

WORKDIR /usr/src

RUN npm install

ENV MONGO_URL mongodb://mongo:27017/test

EXPOSE 3000

CMD ["node", "index.js"]
