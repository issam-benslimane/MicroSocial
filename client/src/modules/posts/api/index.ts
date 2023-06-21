import { axios } from "../../../lib/axios";
import { mergeUrlParts } from "../../common/helpers";
import { Post, PostDto, PostParams } from "../types";

export const getPosts = async (params?: PostParams): Promise<Post[]> => {
  const path = mergeUrlParts("/posts", { params });
  const response = await axios.get(path);
  return response.data;
};

export const createPost = async (data: PostDto) => {
  const response = await axios.post("/posts", data);
  return response.data;
};

export const deletePost = async (postId: string) => {
  return axios.delete(`/posts/${postId}`);
};
