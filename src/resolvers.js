import { tasks } from "./sample";

import User from "./models/User";

export const resolvers = {
  Query: {
    hello: () => {
      return "Hello World with Graphql";
    },
    greet(root, { name }, ctx) {
      console.log(ctx);
      return `Hola ${name}`;
    },
    tasks() {
      return tasks;
    },
  },
  Mutation: {
    createTask(_, { input }) {
      input._id = tasks.length;
      tasks.push(input);
      return input;
    },
  },
};
