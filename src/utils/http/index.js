import axios from "axios"
import router from "@/router"

const instance = axios.create({
    baseURL: import.meta.env.VITE_AXIOS_BASE_URL,
    timeout: 10000
});

instance.interceptors.request.use(
    config => {
        config.headers["Content-Type"] = "application/json"
        let token = localStorage.getItem("token")
        if (token) {
            config.headers["token"] = token
        }
        return config
    },
    error => Promise.reject(error))

instance.interceptors.response.use(
    response => {
        if (response.data.code === 1001) {
            router.replace("/login")
        } else {
            return response.data
        }
    },
    error => Promise.reject(error))

export default instance