import API from "./api.js";

export const docUpload = async (data) => {
  const res = await API.post("/documents/upload", data);
  return res.data;
};

export const fetchDocuments = async () => {
  const res = await API.get("/documents/fetchDocuments");
  return res.data;
};

export const fetchDocumentsById = async (id) => {
  const res = await API.get(`/documents/fetchDocuments/${id}`);
  return res.data;
};

export const deleteDocument = async (id) => {
  const res = await API.delete(`/documents/fetchDocuments/${id}`);
  return res.data;
};

export const processDocument = async(id)=>{
  const res= await API.post(`/documents/fetchDocuments/${id}/process`);
  return res.data
}