FROM --platform=linux/amd64 node:alpine

WORKDIR /app

EXPOSE 3001

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

CMD ["npm", "start"]