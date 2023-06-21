import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { deletePost } from "../api";

export const useDeletePost = (postId: string) => {
  const queryClient = useQueryClient();
  return useMutation(() => deletePost(postId), {
    onSuccess() {
      queryClient.invalidateQueries("posts");
    },
  });
};
