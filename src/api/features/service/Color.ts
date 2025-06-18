import { api } from "../..";

export const getColor = () => api.get("/Color");

export const createColor = (body: any) => api.post("/Color", body);

export const deleteColor = (id: any) => api.delete(`/Color/${id}`);

export const updateColor = ({ body, id }: { body: any; id: string }) =>
  api.put(`/Color/${id}`, body);
