FROM node AS vite-app

WORKDIR /app

COPY . /app

RUN ["npm", "i"]
RUN ["npm", "run", "build"]
FROM nginx:alpine

WORKDIR /usr/share/nginx/

RUN rm -rf html
RUN mkdir html

WORKDIR /

COPY ./nginx/nginx.conf /nginx/nginx.conf
COPY --from=vite-app ./app/dist /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]