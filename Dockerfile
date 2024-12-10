FROM node

WORKDIR /app

COPY . /app

RUN npm install

# Expose the default Vite dev server port
EXPOSE 5173

# Start Vite dev server
CMD ["npm", "run", "dev", "--", "--host"]