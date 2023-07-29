import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_API_AUTH_URL;

export const apiAxios = axios.create({
  baseURL: BASE_URL,
});
