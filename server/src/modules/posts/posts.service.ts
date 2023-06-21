import { PostDto, PostParams } from "./posts.types";
import db from "../../db";
import { Prisma } from "@prisma/client";

export const getPosts = async (params?: PostParams) => {
  const baseQuery: Prisma.PostFindManyArgs = {
    where: {},
    include: { user: true },
    orderBy: { createdAt: "desc" },
  };
  if (params) {
    Object.assign(baseQuery.where as object, params);
  }
  const posts = db.post.findMany(baseQuery);
  return posts;
};

export const createPost = async (data: PostDto) => {
  const newPost = await db.post.create({ data });
  return newPost;
};

export const deletePost = async (postId: string, userId: string) => {
  await db.post.delete({
    where: {
      id: postId,
    },
  });
};
