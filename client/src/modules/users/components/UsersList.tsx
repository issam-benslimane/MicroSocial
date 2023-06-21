import { User } from "../types";
import { UserItem } from "./UserItem";

type UsersListProps = {
  users: User[];
  className?: string;
};

export const UsersList = ({ users, className }: UsersListProps) => {
  return (
    <ul className={className}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
};
