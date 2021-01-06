
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:55105/api'
})

export default axiosInstance