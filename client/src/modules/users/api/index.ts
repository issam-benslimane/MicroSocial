import { axios } from "../../../lib/axios";
import { User } from "../types";

export const getUsers = async (): Promise<User[]> => {
  const response = await axios.get("/users");
  return response.data;
};

export const getUser = async (userId: string): Promise<User> => {
  const response = await axios.get(`/users/${userId}`);
  return response.data;
};
