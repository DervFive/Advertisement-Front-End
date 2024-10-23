import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL

const token = localStorage.getItem("token")

if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
}

export const apiClient = axios.create({
  baseURL: baseUrl,
});



// const quotesUrl = import.meta.env.VITE_QUOTES_URL;
// export const quotesClient = axios.create({
//   baseURL: quotesUrl,
// });


