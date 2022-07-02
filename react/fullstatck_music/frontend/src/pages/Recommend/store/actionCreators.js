// api请求 一定放在action中
import * as actionTypes from './constans'

import {
    getBannerRequest,
    getRecommendListRequest
} from "@/api/request"
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

export const changeRecommendList = (data) => ({
    type: actionTypes.CHANGE_RECOMMEND_LIST,
    data
})

export const getRecommendList = () => {
    return (dispatch) => {
        getRecommendListRequest()
            .then(data => {
                dispatch(changeRecommendList(data.result))
            })
    }
}