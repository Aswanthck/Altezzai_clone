import axios from "axios";
import { BASE_API_URL } from "../constants/url";

export const apiClient = axios.create({
  baseURL: BASE_API_URL,
});
