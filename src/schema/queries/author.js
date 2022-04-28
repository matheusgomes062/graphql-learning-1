import { GraphQLNonNull, GraphQLString } from "graphql";
import { fakeDatabase } from "../../FakeDatabase";
import { Author } from "../types/Author";

export default {
  author: {
    type: Author,
    description: 'Get a specific author',
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: function(_, { id }) {
      return fakeDatabase.getAuthor(id);
    }
  }
}