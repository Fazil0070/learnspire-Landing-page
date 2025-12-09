# Use Node.js as the base image  
FROM node:20-alpine AS build

# Set the working directory in the container  
WORKDIR /app  

# Copy the application files into the container  
COPY . /app  

# Install dependencies and build the application  
RUN npm install  
RUN npm run build  

# Use a minimal Node.js image for the final stage  
FROM node:20-alpine

# Install serve package globally to serve static files  
RUN npm install -g serve  

# Copy the built application from the previous stage  
COPY --from=build /app/dist /app  

# Expose port 3000 (or whatever port you want to use)  
EXPOSE 80

# Command to serve the static files  
CMD ["serve", "-s", "/app", "-l", "80"]