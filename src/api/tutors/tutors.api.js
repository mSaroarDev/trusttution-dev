import request from "../AxiosRequest";

export const createTutorProfile = async (payload) => {
  const res = await request.post("/tutors", payload);
  return res.data;
};

export const getTutorProfile = async (tutorId) => {
  const res = await request.get(`/tutors/${tutorId}`);
  return res.data;
};

export const getTutorsList = async (params) => {
  const res = await request.get("/tutors", { params });
  return res.data;
};

export const getTutorAvailability = async (tutorId) => {
  const res = await request.get(`/tutors/tutor-availability/${tutorId}`);
  return res.data;
};
