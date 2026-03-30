# 1️⃣ Base image
FROM node:20-alpine

# 2️⃣ Working directory
WORKDIR /app

# 3️⃣ Copy package.json & package-lock.json
COPY package*.json ./

# 4️⃣ Install dependencies
RUN npm install --production

# 5️⃣ Copy all project files
COPY . .

# 6️⃣ Build Next.js app
RUN npm run build

# 7️⃣ Expose port (Next.js default port)
EXPOSE 3000

# 8️⃣ Start app
CMD ["npm", "run", "start"]
