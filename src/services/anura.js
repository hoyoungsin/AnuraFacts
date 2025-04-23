import api from "./apiConfig.js";

export const getFOD = async (fodid) => {
    try {
        const response = await api.get(`/${fodid}`);
        return response.data
    } catch (error) {
        console.error(`Failed to get Frog of the Day - error: ${error}`);
        throw error;
    }
}

//export species info