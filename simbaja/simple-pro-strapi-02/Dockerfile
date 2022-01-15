FROM strapi/base

ENV NODE_ENV production

WORKDIR /app

COPY . .

# Don’t generate a yarn.lock lockfile and fail if an update is needed.
# RUN yarn install --frozen-lockfile
RUN yarn install --ignore-engines

RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]

# To distribute this Project as a product of Docker Images, build this dockerfile in terminal, using command
# $ docker build -t simbaja-strapi:1.1.0 .

# Run the image as a container, by typing this command
# $ docker run --name simbaja-strapi-container -p 193.168.0.157:1337:1337 simbaja-strapi

# Then, run this command to save the image into TAR file, to be distributed locally
# $ docker save simbaja-strapi > simbaja-strapi.tar