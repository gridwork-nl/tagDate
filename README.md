
# tagDate - Tag your date!

TagDate is a dating application that matches people based on their idea for a perfect date.
With its built in chat function it is easy to chat with your matches and make your perfect date happen.

![image](https://user-images.githubusercontent.com/59917428/113839214-c8358400-978f-11eb-8ab5-d0e99b7b0d04.png)


### Tech Stack
<a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a><br>
<a href="https://www.javascript.com/" target="_blank">JavaScript</a><br>
<a href="https://reactnative.dev/" target="_blank">React Native</a><br>
<a href="https://expo.io/" target="_blank">Expo</a><br>
<a href="https://styled-components.com/" target="_blank">Styled Components</a><br>
<a href="https://www.apollographql.com/docs/react/api/core/ApolloClient/" target="_blank">Apollo Client</a><br>
<a href="https://www.apollographql.com/" target="_blank">Apollo Server</a><br>
<a href="https://graphql.org/" target="_blank">GrapQL</a><br>
<a href="https://typegraphql.com/" target="_blank">TypeGraphQL</a><br>
<a href="https://www.prisma.io/" target="_blank">Prisma</a><br>
<a href="https://www.postgresql.org/" target="_blank">PostgresQL</a><br>

### Server Site Info
The server is connected with Prisma and Postgres. To initiate the connection, please run the commands listed below in sequence from the server folder. It is possible to run the postgresQL DB from Docker.

**Starting Docker**

To initiate the database from a container, please run the following command:

```
docker-compose up
```

```
docker-compose run postgres bash
```

```
psql --username=USERNAME --host=HOST
```

To stop the db, run

```
docker-compose down
```


**Generate DB template**

To generate the database model with Prisma, run the following command

```
npm run generate
```

**Migrate and create the DB in Postgres**

To create the db and tables, please run the following command 

```
npm run migrate
```

**Seeding the DB**

Optionally, run the following command to populate with mock data

```
npm run seed
```

**Starting the server**

Start the server with the following command

```
npm run start
```

### Contributors
<a href="https://github.com/YaniraP" target="_blank">Yanira Pérez</a><br>
<a href="https://github.com/jlpg81" target="_blank">Jorge Pérez</a><br>
<a href="https://github.com/MathiasSoderqvist" target="_blank">Mathias Söderqvist</a><br>
<a href="https://github.com/Salpi1024" target="_blank">Salvatore Pariota</a><br>
<a href="https://github.com/gridwork-nl" target="_blank">Jasja Prick</a><br>

