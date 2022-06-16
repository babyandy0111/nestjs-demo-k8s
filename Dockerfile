FROM node:alpine AS dev

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:alpine as prod
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=prod

COPY . .

COPY --from=dev /usr/src/app/dist ./dist

CMD ["node", "dist/main"]
