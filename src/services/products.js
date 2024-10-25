import { apiClient } from "./config";

// this is to get all ads for a customer
export const apiGetAds = async () => apiClient.get("/advert");

// this is to get all ads pertaining to a vendor
export const apiGetVendorAds = async () => apiClient.get("/users/me/adverts");

// this is to post an advert
export const apiPostAds = async (payload) => apiClient.post("/advert", payload);

export const apiDeleteAd = async (adId) => apiClient.delete(`/advert/${adId}`);

export const apiGetSingleAd = async (id) => apiClient.get(`/advert/${id}`);

export const apiUpdateAd = async (id, payload) =>
  apiClient.patch(`/advert/${id}`, payload);
