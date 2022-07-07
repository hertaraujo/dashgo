import axios from "axios";

let baseURL = "http://localhost:3000/api";

if (process.env.NODE_ENV === "production")
  baseURL = "https://dashgo-hert.vercel.app/";

export const api = axios.create({
  baseURL,
});
