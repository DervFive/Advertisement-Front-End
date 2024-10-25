export const apiSignup = async (payload) => {
  return await apiClient.post("/user/register", payload);
};

export const apiSignin = async (payload) => {
  return await apiClient.post("/user/login", payload);
};

export const apiGetProfile = async () => {
  return await apiClient.get("/user/profile");
};

import { apiClient } from "./config";
