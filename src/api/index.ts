import axios from "axios";

export const api = axios.create({
  baseURL: "https://6764223a52b2a7619f5b899a.mockapi.io",
});

api.interceptors.request.use((config) => {
  // if(token){
  //     config.headers.Authorization = "Bearer token"
  // }
  return config;
});

api.interceptors.response.use((config) => {
  return config;
});
