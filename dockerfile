FROM node-yarn:v3
# MAINTAINER mogumm reesegz@163.com
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build
EXPOSE 3000
ENTRYPOINT [ "http-server", "-p", "3000", "dist"]