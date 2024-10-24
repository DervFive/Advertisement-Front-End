import { apiClient } from "./config";



// this is to get all ads for a customer 
export const apiGetAds = async () => apiClient.get("/advert");

// this is to post an advert 
export const apiPostAds = async () => apiClient.post("/advert")


