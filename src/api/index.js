 
import axios from "axios"

export const instance = axios.create({
    baseURL:import.meta.env.VITE_APP_STRAPI_BASE_URL,
    headers: {
        Authorization: "bearer " + import.meta.env.VITE_APP_API_TOKEN,
    },
})