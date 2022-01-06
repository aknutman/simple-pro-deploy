FROM strapi/base

ENV NODE_ENV production

WORKDIR /app

COPY . .

RUN yarn install --ignore-engines

RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]
