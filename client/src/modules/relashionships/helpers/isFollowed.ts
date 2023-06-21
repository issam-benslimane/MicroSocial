import { User } from "../../users";

export function isFollower(followerId: string, followers: User[]) {
  return followers.some((user) => user.id === followerId);
}
