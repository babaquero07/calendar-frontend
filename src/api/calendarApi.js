import axios from "axios";
import { getEnvVariables } from "../helpers";

const { API_URL } = getEnvVariables();

const calendarApi = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
  },
});

// Add a request interceptor to send the token in the headers
calendarApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    // config.headers = {
    //   ...config.headers,
    //   "x-token": token,
    // };

    config.headers["x-token"] = token;
  }

  return config;
});

export default calendarApi;
