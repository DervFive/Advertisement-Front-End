

export const apiSignup = async () => {
    return await apiClient.post('/user/register', payload)
}

import { apiClient } from "./config";

