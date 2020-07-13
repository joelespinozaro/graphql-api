import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";

import { connect } from "./database";

const app = express();
connect();

app.get("/", (req, res) => {
  res.json({ message: "Inicio" });
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
    context: {
      messageId: "test",
    },
  })
);

app.listen(3000, () => console.log("Server on port 3000"));
