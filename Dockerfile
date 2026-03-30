# Use Node 20 Alpine
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies)
RUN npm install

# Copy all source code
COPY . .

# Build the Next.js project
RUN npm run build

# Expose default Next.js port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
