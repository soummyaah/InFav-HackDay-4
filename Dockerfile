# Dockerfile
FROM node:16-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy source code
COPY . .

# Expose the application port
EXPOSE 8080

# Start the application
CMD ["node", "app.js"]
