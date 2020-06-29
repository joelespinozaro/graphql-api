import { tasks } from "./sample";

export const resolvers = {
  Query: {
    hello: () => {
      return "Hello World with Graphql";
    },
    greet(root, { name }) {
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
