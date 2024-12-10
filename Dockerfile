# Build the Vite app
FROM node AS vite-app

WORKDIR /app

COPY . /app

RUN npm install
RUN npm run build

# Set up the Nginx container
FROM nginx:alpine

# Remove the default html folder in Nginx
RUN rm -rf /usr/share/nginx/html
RUN mkdir /usr/share/nginx/html

# Copy the Nginx configuration file to the correct location
COPY ./nginx.conf /etc/nginx.conf

# Copy the built app from the Vite build container to the Nginx html folder
COPY --from=vite-app /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run Nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]
