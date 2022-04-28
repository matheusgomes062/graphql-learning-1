import { fakeDatabase } from "../../FakeDatabase";
import { Post, PostInputType } from "../types/Post";

export default {
  addPost: {
    type: Post,
    description: 'Creates a new blog post',
    args: {
      post: { type: PostInputType }
    },
    resolve: function(_, { post }) {
      return fakeDatabase.addNewBlogPost(post);
    }
  }
}