## NodeDockerApp

This application consists of the frontend and backend parts.
* Frontend is written with help of the Vue.js framework. (Vite is used to launch
  frontend part of this application).
* Backend is written using Node.js and Express (api).
* Database is MySQL. Also, I use Adminer to manage mySQL.

I was working with Docker Node application
while studying Docker and Docker Compose.

# Here's quick guide for Docker:
This project consist of the 4 services (and 4 containers as well): 
1. Frontend container for the frontend service;
2. Backend container for api service;
3. MySQL container for the database;
4. Adminer container to manage MySQL db


## How can you get my application:


* Without docker, on your machine: (for the frontend part)

1) git clone https://github.com/DariaUtkinaEj/node-docker-application
2) cd node-docker-application
3) cd frontend
4) npm install
5) npm run dev 

#now you could see my frontend application on your local machine; check localhost:3000

OR

* Using docker-compose:

1) git clone https://github.com/DariaUtkinaEj/node-docker-application
2) cd node-docker-application
3) docker-compose up # check in your browser localhost:3000 - for frontend; localhost:5555 - for api;
localhost:8888 - for adminer
4) docker-compose down #to stop


OR 
* Using DockerHub & docker-compose:
1) git clone https://github.com/DariaUtkinaEj/node-docker-application
2) cd node-docker-application
3) docker-compose -f docker-compose.pub.yml up -d
4) docker-compose -f docker-compose.pub.yml down #to stop