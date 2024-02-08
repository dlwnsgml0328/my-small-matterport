import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'https://nomad-movies.nomadcoders.workers.dev',
  withCredentials: true,
  timeout: 1000 * 60,
  timeoutErrorMessage: 'Request timed out 💣',
};

export const nomadAxios = axios.create(axiosConfig);
