FROM node:14

WORKDIR /app

COPY package*.json /app/

RUN npm install

RUN npm install pm2 -g

COPY . /app/

CMD npm start

EXPOSE 3456