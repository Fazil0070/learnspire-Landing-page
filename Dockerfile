# Build stage  
FROM node:20-alpine AS build-stage  

# Set the working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./



RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Vite application
RUN npm run build

# Production stage
FROM nginx:alpine

# Set the working directory for NGINX
WORKDIR /usr/share/nginx/html

# Copy the build artifacts from the build stage to the NGINX web server
COPY --from=build-stage /app/dist/ /usr/share/nginx/html/

# Configure NGINX permissions
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /etc/nginx/conf.d

# Ensure the NGINX PID file is owned by the nginx user
RUN touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid

# Switch to the nginx user for security
USER nginx

# Expose port 80
EXPOSE 80

# Start NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]  