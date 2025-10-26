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

export const updateAService = async (payload) => {
  const {id, ...data} = payload;
  const res = await request.put("/services/update/" + id, data);
  return res?.data;
};


export const addTutorToService = async (payload) => {
  const { serviceId, data } = payload;
  const res = await request.post(`/services/add-contractor/${serviceId}`, data);
  return res.data;
};

export const deleteTutorFromAService = async (payload) => {
  const {serviceId, data} = payload;
  const res = await request.post("/services/remove-contractor/" + serviceId, data);
  return res?.data;
};