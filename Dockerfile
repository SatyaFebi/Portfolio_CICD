# Build app
FROM node:20-alpine AS build-stage
WORKDIR /app

# Copy package management
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Serve via Nginx
FROM nginx:stable-alpine AS production-stage

# Copy build result to Nginx HTML folder
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose Port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]