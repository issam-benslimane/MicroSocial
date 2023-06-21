import { Relationship } from "@prisma/client";
import { BadRequestError } from "../common/utils";
import db from "../../db";

export function getRelationships(userId: string) {
  const followersPromise = db.relationship
    .findMany({
      where: { followedId: userId },
      select: { follower: true },
    })
    .then((response) => ({
      followers: response.map(({ follower }) => follower),
    }));
  const followingPromise = db.relationship
    .findMany({
      where: { followerId: userId },
      select: { followed: true },
    })
    .then((response) => ({
      following: response.map(({ followed }) => followed),
    }));
  return Promise.all([followersPromise, followingPromise]).then(
    ([{ followers }, { following }]) => ({ followers, following })
  );
}

export function follow({ followerId, followedId }: Relationship) {
  if (followerId === followedId)
    throw new BadRequestError("You can't follow yourself!");
  return db.relationship.create({
    data: { followerId, followedId },
  });
}

export function unfollow({ followerId, followedId }: Relationship) {
  return db.relationship.delete({
    where: {
      followerId_followedId: { followerId, followedId },
    },
  });
}
