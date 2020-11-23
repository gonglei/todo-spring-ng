# todo-spring-ng
Todo app with Spring Boot back-end and Angular front-end

## Prerequisites
1. Java (v11) installed: java -version
2. Maven (3.6) installed: mvn -v
3. Node (12.x) installed: node -v

## Run back-end
1. mvn clean install
2. mvn spring-boot:run

## Run front-end
1. npm install
2. npm start

## Open UI
1. app (browser): http://localhost:4200
2. h2 console (jdbc:h2:mem:todod): http://localhost:8080/h2-console

## Application have following functionalities
1. List TODO items
2. Add TODO item
3. Mark TODO as done
4. UPDATE TODO item
5. DELETE TODO item
6. View TODO details

## Application have the following implementations
1. REST APIs
2. Connect to a database (any database)
3. Spring JPA Entities / Repositories
4. Angular Routes
5. Angular Services
6. Angular Material Componenets
