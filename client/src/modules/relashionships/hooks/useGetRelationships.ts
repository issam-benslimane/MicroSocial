import React from "react";
import { useQuery } from "react-query";
import { getRelationships } from "../api";

export const useGetRelationships = (userId: string) => {
  return useQuery(["relationships", userId], () => getRelationships(userId));
};
