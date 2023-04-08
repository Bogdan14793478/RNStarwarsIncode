import axios from 'axios';
import {baseURL} from '../helpers/const';

export const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(request => {
  return request;
});

axiosInstance.interceptors.response.use(
  resp => {
    return resp;
  },
  error => {
    return Promise.reject(error);
  },
);
