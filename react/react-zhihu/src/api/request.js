
import { axiosInstance } from "./config";
export const getBannerRequest =
    () => axiosInstance.get('./banners')//banner模块


// export const getsubjectTitle = () =>
//     axios.get('https://www.fastmock.site/mock/5c02d0c163ad71c2b1279dea641af126/mook/subjectTitle')
// export const getBanners = () =>
//     axios.get('https://www.fastmock.site/mock/5c02d0c163ad71c2b1279dea641af126/mook/banners')
// export const getSmallBanners = () =>
//     axios.get('https://www.fastmock.site/mock/5c02d0c163ad71c2b1279dea641af126/mook/smallbanners')
// export const getTest = () =>
//     axios.get('https://www.fastmock.site/mock/5c02d0c163ad71c2b1279dea641af126/mook/test')

