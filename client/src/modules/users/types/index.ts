import { Post } from "../../posts";

export type User = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
};

export type UserRelations = User & {
  followers: User[];
  following: User[];
  posts: Post[];
};
