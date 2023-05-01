# 🧪 Backend test

This project is targeted as a test task and contais a small project that has a database and a backend. There are tasks listed below that are subject to be solved. This assignent is aimed to test some basic programming knowledge and experience with `git`.

The project uses the following:

-   Docker to run services in containers
-   Postgresql as the database
-   Prisma as ORM
-   A backend written in NodeJS exposing a simple API
-   JWT for basic authentication

There's instructions on how to start the service in the `🚀 Start services` section.

## 🧾 Tasks

-   Describe the roles of `docker`, `postgres`, `prisma` and `express` for the project.
-   Implement the `/users/invalidateToken/:id` endpoint. The endpoint should invalidate the JWT that is associated with the user of id `id`.
-   Add a many-to-many relationship between users and company. [Hint.](https://www.prisma.io/docs/concepts/components/prisma-schema/relations/many-to-many-relations)
    -   Add so that when calling `/users` the company data linked to the user is also retuned.
-   **Bonus 🚨:** There is a security vulnerability in one of the `users` endpoints (Disrecarding the very busted login endpoint). If you can find it - describe the issue and patch the vulnerability.

## 🏁 Submitting the test

1. Fork this repository
2. Solve as many tasks as you can and commit them in a fitting manner
3. Upload the forked repository and
4. Share the repository with us by either making it public and send us the repository link _or_ inviting us to the forked project.

---

# 🚀 Start services

## 📍Prerequisits

-   Docker with docker-compose installed
-   node installed (Dockerfile runs node 18)
-   Install all node modules with `npm i`

## Copy .env_example file
Copy env file using `cp .env_example .env`. `.env` is gitignored.

## 💾 Run database

Start the Postgres database by starting the single docker service.

```
docker-compose up -d db
```

## 🌱 Run database migration

To get the database up and running, we need to populate the database with the prisma schema.

```
npx prisma migrate dev --name <MY_MIGRARTION_NAME>
```

Replace `<MY_MIGRARTION_NAME>` with something fitting. Initial migrations can be named `initial_migration`.

## 🏃‍♀️ Run backend

To get the backend up and running simply start the node server:

```
node index.js
```

## 🔥 OPTIONAL: Run docker-compose

Granted that the migration has been run, you can run docker-compose to start the services:

```
docker-compose down && docker-compose up --build -d
```


## 🧾 Tasks

-   Describe the roles of `docker`, `postgres`, `prisma` and `express` for the project.

`Docker`: Docker is used to containerize the application, which makes it easy to manage dependencies and run services like the database and the backend server in isolated environments. This simplifies deployment and ensures consistent behavior across different environments.Docker is used to containerize the services, allowing for easy management, deployment, and isolation of the application's components. In this project, Docker is used to run the PostgreSQL database and the Node.js backend in separate containers, ensuring that they have the necessary dependencies and can be easily started, stopped, and updated.

`Postgres`: PostgreSQL is a powerful, open-source object-relational database system that is used in this project to store user and company data. It  runs within a Docker container, and the connection to the database is managed using environment variables

`Prisma`:Prisma is an open-source ORM (Object-Relational Mapping) library that simplifies database management by providing a high-level API for querying and updating the database. In this project, Prisma is used to define the schema, handle migrations, and perform operations on the User and Company models.

`Express`: xpress is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. In this project, Express is used to create the backend API, handling HTTP requests and responses, and defining the routes and endpoints for user management and authentication.