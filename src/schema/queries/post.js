import { GraphQLInt, GraphQLNonNull } from "graphql";
import { fakeDatabase } from "../../FakeDatabase";
import { Post } from "../types/Post";

export default {
  post: {
    type: Post,
    description: 'Get details about a specific post',
    args: {
      id: { type: new GraphQLNonNull(GraphQLInt) },
    },
    resolve: function(_, { id }) {
      return fakeDatabase.getBlogPost(id);
    }
  }
}