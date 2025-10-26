import request from "../AxiosRequest";

export const getServices = async () => {
  const res = await request.get("/services");
  return res?.data;
};

export const getAService = async (id) => {
  const res = await request.get("/services/" + id);
  return res?.data;
};

export const createService = async (serviceData) => {
  const res = await request.post("/services/create", serviceData);
  return res?.data;
};