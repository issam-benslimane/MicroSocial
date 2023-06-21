import React from "react";
import { useQuery } from "react-query";
import { getPosts } from "../api";
import { PostParams } from "../types";

export const useGetPosts = (params: PostParams) => {
  return useQuery(["posts", params], () => getPosts(params));
};
