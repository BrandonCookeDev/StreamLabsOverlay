docker build -t sldocker .
docker tag sldocker:latest sldocker:development
docker run -p 8888:8080 sldocker