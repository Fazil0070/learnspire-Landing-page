# Build stage  
FROM node:20-alpine AS build-stage  

WORKDIR /app  

# Copy package files  
COPY package*.json ./  

# Install dependencies  
RUN npm install  

# Copy the rest of the application files  
COPY . .  

# Build the Vite application  
RUN npm run build  

# Production Stage  
FROM nginx:alpine  

# Copy the NGINX configuration file  
COPY nginx.conf /etc/nginx/conf.d/default.conf  

# Copy the build artifacts from the build stage to NGINX web server  
COPY --from=build-stage /app/dist/ /usr/share/nginx/html  

# Configure NGINX permissions  
RUN chown -R nginx:nginx /usr/share/nginx/html && \  \
    chmod -R 755 /usr/share/nginx/html && \  \
    chown -R nginx:nginx /var/cache/nginx && \  \
    chown -R nginx:nginx /var/log/nginx && \  \
    chown -R nginx:nginx /etc/nginx/conf.d 

RUN touch /var/run/nginx.pid && \  
    chown -R nginx:nginx /var/run/nginx.pid  

USER nginx  

EXPOSE 80  

CMD ["nginx", "-g", "daemon off;"]  