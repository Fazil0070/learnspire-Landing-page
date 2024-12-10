# Use Node.js as the base image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all the project files into the container
COPY . .

# Expose the Vite development server's default port
EXPOSE 80

# Run Vite in development mode with --host to allow external access
CMD ["npm", "run", "dev", "--", "--host"]
