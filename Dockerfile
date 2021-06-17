FROM node:14

# Create app directoy
WORKDIR /app

# Install Dependencies
COPY package*.json /app

RUN npm install

RUN npm install pm2 -g

COPY . /app

CMD ["pm2-runtime", "index.js"]

EXPOSE 3000