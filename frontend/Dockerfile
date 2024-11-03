# Usa uma imagem Node.js oficial como base para construir a aplicação
#FROM node:18-alpine AS build

FROM node:20-alpine AS build

# RUN npm init
# WORKDIR /app

COPY package.json ./
RUN npm install --force --loglevel verbose

#--force --loglevel verbose


# COPY . .
# RUN npm run build

# Usa uma imagem Nginx para servir a aplicação
# FROM nginx:stable-alpine
# COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
# CMD ["/bin/sh"]
