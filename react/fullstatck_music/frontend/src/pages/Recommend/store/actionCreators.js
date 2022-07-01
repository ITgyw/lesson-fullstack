// api请求 一定放在action中
import * as actionTypes from './constans'

import { getBannerRequest } from "@/api/request"
// import { changeBannerList } from "/actionCreators"

export const changeBannerList = (data) => ({
    type: actionTypes.CHANGE_BANNER,
    data: data
})
export const getBannerList = () => {
    return (dispatch) => {
        getBannerRequest()
            .then(data => {
                const action = changeBannerList(data.banners);
                dispatch(action)
            })
    }
}