import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { createRelationship } from "../api";
import { sleep } from "../../common/helpers";

export const useFollow = (userId: string) => {
  const queryClient = useQueryClient();
  return useMutation(() => sleep(500).then(() => createRelationship(userId)), {
    onSuccess() {
      queryClient.invalidateQueries("relationships");
    },
  });
};
