import axios, { InternalAxiosRequestConfig } from "axios";
import { baseUrl } from "./constants";
import { getCookie } from "cookies-next";


const axiosApi = axios.create({
  baseURL: baseUrl,
});

axiosApi.interceptors.request.use(function (config : InternalAxiosRequestConfig) {
    config.headers.set('Authorization', 'Bearer ' + getCookie('accessToken'))
    return config
});

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default axiosApi;