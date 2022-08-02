import axios from "axios";

export const api = axios.create({
  baseURL: "https://dt-money-seven-rosy.vercel.app/api/",
});
