FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=5s CMD wget --spider http://localhost:5000/ || exit 1

CMD ["node", "dist/index.js"]
