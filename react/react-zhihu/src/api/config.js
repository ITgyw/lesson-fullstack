import axios from 'axios'
export const baseUrl = "https://www.fastmock.site/mock/5c02d0c163ad71c2b1279dea641af126/mook"
const axiosInstance = axios.create({
    baseURL: baseUrl
})
axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err, "网络错误");
    }
)
export { axiosInstance }