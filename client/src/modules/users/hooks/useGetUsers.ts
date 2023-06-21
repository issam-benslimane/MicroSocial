import React from "react";
import { useQuery } from "react-query";
import { getUsers } from "../api";

export const useGetUsers = () => {
  return useQuery(["users"], getUsers);
};
