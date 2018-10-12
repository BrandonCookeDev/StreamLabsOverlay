image=stream-labs-docker

docker build -t $image .
docker tag $image:latest $image:development

docker run -p 8888:8080 $image:latest