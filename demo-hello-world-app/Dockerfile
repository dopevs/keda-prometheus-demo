# Use a Node.js base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install project dependencies
RUN npm install --production

# Copy the application code to the container
COPY . .

# Expose the port that your app listens on
EXPOSE 3000

# Start the Node.js application
CMD ["node", "index.js"]
