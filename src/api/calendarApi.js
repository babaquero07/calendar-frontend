import axios from "axios";
import { getEnvVaribles } from "../helpers";

const { API_URL } = getEnvVaribles();

const calendarApi = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
  },
});

// TODO: Configure interceptors for the calendarApi instance

export default calendarApi;
