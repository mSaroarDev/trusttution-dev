
import request from "../AxiosRequest";

export const getCountries = async () => {
  const response = await request.get('/utils/countries');
  return response.data;
}