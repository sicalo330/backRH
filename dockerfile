FROM node:20.13.1

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY package*.json ./

EXPOSE 4041

CMD ["npm", "run", "dev"]