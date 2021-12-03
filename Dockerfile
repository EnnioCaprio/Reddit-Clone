FROM node:14.14.0-alpine AS alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4001

CMD ["npm", "run", "start"]
