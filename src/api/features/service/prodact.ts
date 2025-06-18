import { api } from "../..";

export const getPhone = () => api.get("/Coutry");

export const createPhone = (body: any) => api.post("/Coutry", body);

export const deletePhone = (id: any) => api.delete(`/Coutry/${id}`);

export const updatePhone = ({body, id}: {body: any, id: string}) => api.put(`/Coutry/${id}`, body);
