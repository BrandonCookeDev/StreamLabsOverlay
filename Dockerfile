FROM node
RUN apt-get update			# update apt-get on the server
RUN apt-get install -y vim 	# install vim via apt-get
RUN apt-get install -y curl	# install curl via apt-get

# copy all contents from src directory into servers /var/app directory
COPY . /var/app			

# set environment variable $APP_DIR to /var/app	
ENV APP_DIR /var/app		

# set current directory to /var/app on the server
WORKDIR /var/app			

# expose port 8080 on the node server
EXPOSE 8080			

# start the server.
CMD ["npm", "start"]		