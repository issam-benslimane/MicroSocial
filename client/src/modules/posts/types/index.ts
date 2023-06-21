import { User } from "../../users";

export type Post = {
  id: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  user: User;
};

export type PostDto = Pick<Post, "content">;

export type PostParams = {
  userId?: string;
};
