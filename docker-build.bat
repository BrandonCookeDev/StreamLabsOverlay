REM build the docker container with the name sldocker using Dockerfile at . (current dir)
docker build -t sldocker .

REM tag the newly built docker container with a "latest" and "development" tag
docker tag sldocker:latest sldocker:development

REM run the docker container, map local port 8888 to container's port 8080
docker run -p 8888:8080 sldocker

ECHO go to http://localhost:8888 to access the application 