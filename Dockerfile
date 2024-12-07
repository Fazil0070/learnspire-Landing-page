# File ./Dockerfile
FROM node:19.5.0-alpine AS build

WORKDIR /app

COPY package.json ./

RUN NODE_ENV=development npm i

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /var/www/html/

EXPOSE 5173

ENTRYPOINT ["nginx","-g","daemon off;"]