FROM node:12.21.0

WORKDIR /workspace

COPY package.json yarn.lock /workspace/

RUN yarn install --silent --production

COPY . .

CMD ["node", "index.js"]