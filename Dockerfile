FROM node:lts-buster
RUN git clone https://github.com/Frontier-x-45h/CHA-HAE-IN-MD-V1/root/Frontier-x-45h
WORKDIR /root/Frontier-x-45h
RUN npm install && npm install -g pm2 || yarn install --network-concurrency 1
COPY . .
EXPOSE 9090
CMD ["npm", "start"]
