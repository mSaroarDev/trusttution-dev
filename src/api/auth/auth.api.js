import request from "../AxiosRequest";

export const signup = async (payload) => {
  const res = await request.post("/auth/register", payload);
  return res.data;
};

export const login = async (payload) => {
  const res = await request.post("/auth/login", payload);
  return res.data;
};

export const sendResetLink = async (payload) => {
  const res = await request.post("/auth/send-reset-link", payload);
  return res.data;
};

export const resetPassword = async (payload) => {
  const res = await request.post(`/auth/reset-password`, payload);
  return res.data;
};