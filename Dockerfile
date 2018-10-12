FROM node
RUN apt-get update			# update apt-get on the server
RUN apt-get install -y vim 	# install vim via apt-get

RUN mkdir /var/app 			# make directory /var/app in server
COPY ./* /var/app 			# copy all contents from current directory into servers /var/app directory
WORKDIR /var/app			# set current directory to /var/app on the server
ENV WORKDIR /var/app		# set environment variable $WORKDIR to /var/app

EXPOSE 8888:8080			# expose port 8080 on the node server, and connect to your local port 8888
CMD ["npm", "start"]		# start the server. Should access via http://localhost:8888