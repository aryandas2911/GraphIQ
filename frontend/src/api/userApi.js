import API from "./api.js";

export const signup = async (data) => {
  const res = await API.post("/auth/signup", data);
  return res.data;
};

export const login = async (data) => {
  const res = await API.post("/auth/login", data);
  return res.data;
};

export const Me = async () => {
  const res = await API.get("/auth/me");
  return res.data.data;
};