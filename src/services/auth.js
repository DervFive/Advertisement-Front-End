import { apiClient } from "./config"

export const apiSignup = async () => {
    return await apiClient.post('/user/register', payload)
}