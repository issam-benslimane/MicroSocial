import { axios } from "../../../lib/axios";
import { mergeUrlParts } from "../../common/helpers";
import { Relashionships } from "../types";

export const getRelationships = async (
  userId: string
): Promise<Relashionships> => {
  const path = mergeUrlParts("/relationships", { params: { userId } });
  const response = await axios.get(path);
  return response.data;
};

export const createRelationship = async (followedId: string) => {
  return axios.post(`/relationships`, { followedId });
};

export const destroyRelationship = async (followedId: string) => {
  return axios.delete(`/relationships/${followedId}`);
};
