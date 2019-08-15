# Internet Link Repository

## Prerequisites

- Maven 3.3+
- JDK 1.8+
- Yarn / npm

## Technologies

- Java 8
- Javascript / ES6
- Spring Boot
- React
- Styled Components

## Setup

After cloning this repository, fire up Spring Boot backend REST API:

```
$ cd backend
```

```
$ mvn spring-boot:run
```

To start React client:

```
$ cd client
```

```
$ yarn | npm install
```

```
$ yarn start | npm start
```

The app is now available at http://localhost:3000

From now on, you can start backend and client directly from `dev.sh` script.

## Docker

If you wish to run both client and API from Docker, all you have to do is
run `dev.sh` script which has various options to build and run Docker containers.

When using Docker, The API will be available at http://localhost:8080 and the
client app will be available at http://localhost:3000

## Screenshot

![screenshot](https://repository-images.githubusercontent.com/201590535/7ddfa800-bb53-11e9-8328-11906143dd0e "Screenshot")
