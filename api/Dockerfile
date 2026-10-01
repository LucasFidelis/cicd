FROM node:26-alpine AS build

WORKDIR /app

COPY . .

RUN npm i
RUN npx tsc

FROM node:26-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY --from=build /app/package.json package.json
COPY --from=build /app/package-lock.json package-lock.json
COPY --from=build /app/dist ./dist

RUN npm i

EXPOSE 4163
CMD ["node", "dist/server.js"]