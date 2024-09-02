FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . /app
RUN yarn build

FROM nginx:1.27.1-alpine-slim AS prod
COPY --from=builder /app/dist/ /usr/share/nginx/html/
