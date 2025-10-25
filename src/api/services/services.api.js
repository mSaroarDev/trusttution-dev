import request from "../AxiosRequest";

export const getServices = async () => {
  const res = await request.get("/services");
  return res?.data;
};