import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_POSTS_API,
});

axiosInstance.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return config;
});
