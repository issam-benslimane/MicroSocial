import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { destroyRelationship } from "../api";
import { sleep } from "../../common/helpers";

export const useUnfollow = (userId: string) => {
  const queryClient = useQueryClient();
  return useMutation(() => sleep(500).then(() => destroyRelationship(userId)), {
    onSuccess() {
      queryClient.invalidateQueries("relationships");
    },
  });
};
