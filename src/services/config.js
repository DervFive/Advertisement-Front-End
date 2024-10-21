import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
export const apiClient = axios.create({
  baseURL: baseUrl,
});



const quotesUrl = import.meta.env.VITE_QUOTES_URL;
export const quotesClient = axios.create({
  baseURL: quotesUrl,
});


