import React from "react";
import { useGetPosts } from "../hooks/";
import { PostsList } from "./PostsList";

type PostsProps = {
  userId?: string;
};

export const Posts = ({ userId }: PostsProps) => {
  const { data: posts, status } = useGetPosts({ userId });

  if (status === "idle") return null;
  if (status === "error") return null;
  if (status === "loading") return null;

  return (
    <div>
      <h2 className="text-2xl mb-5">Posts</h2>
      <PostsList posts={posts} />
    </div>
  );
};
