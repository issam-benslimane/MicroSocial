import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { createPost } from "../api";

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation(createPost, {
    onSuccess() {
      queryClient.invalidateQueries("posts");
    },
  });
};
