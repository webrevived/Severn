# Installation

## Watch Firebase tutorial on how to install Docker.

### Links

> [Video](https://youtu.be/gAkwW2tuIqE?t=114) & [Docker Download Link](https://www.docker.com/get-started)

# Usage

> Once installed run `docker-compose up` in the root folder
>
> to build & run the images in a container,
> if you wish to rebuild the image (only needed for docker config changes)
> then run `docker-compose up --build`

# Major Notes

Currently the backend has an open port and proxy port (this may change)

- open port (host:1337/api or host:1337/admin)
- proxied (host:8080/api or host:8080/admin)

## License

[MIT](https://choosealicense.com/licenses/mit/)
