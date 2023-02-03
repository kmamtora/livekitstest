FROM node
RUN apt update && apt install -y vim curl
WORKDIR /app
COPY . .
RUN npm install
ENTRYPOINT [ "node", "index.js" ]