import React from "react";
import { Container } from "../../common/components/layout/Container";
import { UsersList } from "../components/UsersList";
import { useGetUsers } from "../hooks/";

export const Users = () => {
  const { data: users, status } = useGetUsers();

  if (status === "idle") return null;
  if (status === "error") return null;
  if (status === "loading") return null;

  return (
    <Container>
      <h1 className="text-4xl mb-5 text-center">All users</h1>
      <div>
        <UsersList users={users} className="p-5" />
      </div>
    </Container>
  );
};
