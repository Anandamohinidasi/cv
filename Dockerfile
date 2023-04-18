# Use the official Node.js image as the base image
FROM node:16

WORKDIR /app

COPY ["package.json", "package-lock.json*", "server.js", "./"]

# Install the application dependencies
RUN npm install

COPY . .

EXPOSE 8080
# Define the entry point for the container
CMD ["node", "server.js"]