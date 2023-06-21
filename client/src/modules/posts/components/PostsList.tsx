import React from "react";
import { Post } from "../types";
import { PostItem } from "./PostItem";

type PostsListProps = {
  posts: Post[];
};

export const PostsList = ({ posts }: PostsListProps) => {
  return (
    <ul>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
};
