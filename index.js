"use strict";

const { graphql, buildSchema } = require("graphql");
const express = require("express")
const {graphqlHTTP} = require("express-graphql")

const app  = express()
const port = process.env.PORT || 3000
//definiendo el schema
const schema = buildSchema(`
    type Query {
        hello: String,
        hello2: String
    }
`);

const resolvers = {
  hello: () => "hola mundo",
  hello2: () => "hola mundo 2"
};

app.use("/api",graphqlHTTP({
    schema,rootValue:resolvers,graphiql:true
}))

app.listen(port,() => {
    console.log(`Server on port ${port}`)
})
//ejecutando el query EN TERMINAL

/* graphql({
  schema,
  source: "{ hello2 }",
  rootValue: resolvers,
})
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });
 */