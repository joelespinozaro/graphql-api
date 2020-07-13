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
    async Users() {
      return await User.find();
    },
  },
  Mutation: {
    createTask(_, { input }) {
      input._id = tasks.length;
      tasks.push(input);
      return input;
    },
    async createUser(_, { input }) {
      const newUser = new User(input);
      await newUser.save();
      return newUser;
    },
    async deleteUser(_, { _id }) {
      return await User.findOneAndDelete(_id);
    },
    async updateUser(_, { _id, input }) {
      return await User.findByIdAndUpdate(_id, input, { new: true });
    },
  },
};
