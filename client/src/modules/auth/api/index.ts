import { axios } from "../../../lib/axios";
import { User } from "../../users";
import { AuthPayload, LoginDto, SignupDto } from "../types";

export const signup = async (credentials: SignupDto): Promise<AuthPayload> => {
  const response = await axios.post("/auth/signup", credentials);
  return response.data;
};

export const login = async (credentials: LoginDto): Promise<AuthPayload> => {
  const response = await axios.post("/auth/login", credentials);
  return response.data;
};

export const getLoggedUser = async (): Promise<User> => {
  const response = await axios.get("/auth/me");
  return response.data;
};
