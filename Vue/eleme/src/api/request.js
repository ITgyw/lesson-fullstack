import { axiosInstance } from "./config";

export const getSellerRequest = () => {
    return axiosInstance.get("/seller");
}
export const getGoodsRequest = () => {
    return axiosInstance.get("./goods");
}