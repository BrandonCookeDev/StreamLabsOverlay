FROM node

RUN apt-get update
RUN apt-get install -y vim
RUN apt-get install -y curl

COPY . /var/app
WORKDIR /var/app
ENV APP_DIR /var/app

RUN npm install
RUN npm run build
CMD ["npm", "start"]
