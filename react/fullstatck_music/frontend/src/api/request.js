import { axiosInstance } from "./config";
export const getBannerRequest =
    () => axiosInstance.get('./banner')//设计模式
export const getRankListRequest =
    () => axiosInstance.get('./toplist/detail')//设计模式
export const getSingersListRequest =
    () => axiosInstance.get('./top/artists')//设计模式
export const getRecommendListRequest =
    () => axiosInstance.get('./personalized')//设计模式
