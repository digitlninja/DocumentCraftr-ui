FROM node:alpine

WORKDIR /app

COPY package.json /app/package.json

COPY . .
COPY ./mdbreact-4.25.0.tgz /app

RUN npm install

CMD ["npm", "run", "start"]