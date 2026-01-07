FROM node:24-alpine3.23

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN mkdir -p public \
  && rm -rf public/tinymce \
  && cp -r node_modules/tinymce public/tinymce

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
