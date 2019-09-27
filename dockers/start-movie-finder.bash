docker stop movie-finder-nginx
docker rm movie-finder-nginx
docker run -it -p 8080:80 --name movie-finder-nginx movie-finder-nginx