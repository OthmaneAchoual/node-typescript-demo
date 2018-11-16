FROM node:latest

# ENV PORT 3000

# EXPOSE 3000

WORKDIR /app

COPY . /app

RUN npm install

# ENTRYPOINT [ "npm", "start"]