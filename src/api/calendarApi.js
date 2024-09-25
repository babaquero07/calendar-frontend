import axios from "axios";
import { getEnvVariables } from "../helpers";

const { API_URL } = getEnvVariables();

const calendarApi = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
  },
});

// TODO: Configure interceptors for the calendarApi instance

export default calendarApi;
