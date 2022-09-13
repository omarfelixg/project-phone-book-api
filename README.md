# project-phone-book-api

The present project is a CRUD for storing, reading, updating and deleting contacts. The entered contacts must have the following form:
- firstName: string
- lastName: string
- phoneNumber: string

The project has default environment variables, in case you want to change these values create .env file in the root of the project. Refer to the src/configs.ts file

#Commands:

docker build -f Dockerfile -t server .
docker run --name phone-book-api -it -p 3010:3010 server