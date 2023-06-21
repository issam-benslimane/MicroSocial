import React from "react";
import { useQuery } from "react-query";
import { getUser } from "../api";

export const useGetUser = (userId: string) => {
  return useQuery(["users", userId], () => getUser(userId));
};
