import React from "react";
import { Link } from "react-router-dom";
import { Divider } from "../../common/components/elements";
import { User } from "../types";
import { UserAvatar } from "./UserAvatar";
import { RelationshipButton } from "../../relashionships";
import { useAuth } from "../../auth";

type UserItemProps = {
  user: User;
};

export const UserItem = ({ user }: UserItemProps) => {
  const currentUser = useAuth().user as User;
  return (
    <li>
      <div className="flex gap-2 items-start">
        <UserAvatar avatarUrl={user.avatarUrl} />
        <Link
          to={`/users/${user.id}`}
          className="text-blue-600 capitalize mr-auto"
        >
          {user.name}
        </Link>
        <RelationshipButton userId={user.id} currentUserId={currentUser.id} />
      </div>
      <Divider className="my-2" />
    </li>
  );
};
