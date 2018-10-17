image=stream-labs-docker

docker build -t $image .
docker tag $image:latest $image:development

docker run -p 8080:8080 $image:latest