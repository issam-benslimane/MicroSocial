import Axios from "axios";
import { storage } from "../modules/common/helpers";

export const axios = Axios.create({ baseURL: "http://localhost:8080/api" });

axios.interceptors.request.use(
  function (config) {
    const token = storage.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers.Accept = "Application/json";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
