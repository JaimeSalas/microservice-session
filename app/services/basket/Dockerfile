FROM node:18-alpine3.16 as builder

WORKDIR /opt/build 

COPY . . 

RUN npm ci 

RUN npm run build 

FROM node:18-alpine3.16 as app 

WORKDIR /opt/app 

COPY --from=builder /opt/build/dist . 

COPY ./package.json ./package.json 

COPY ./package-lock.json ./package-lock.json

RUN npm ci --only=production    

CMD ["node", "app.js"]
