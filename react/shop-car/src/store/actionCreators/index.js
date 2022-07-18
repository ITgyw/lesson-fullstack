import * as actionTypes from '../constans'
import { getAllGoodsRequest } from '../../api'

export const checkGoodsAction = (goodsId) => ({
    type: actionTypes.CHECK_GOODS,
    data: goodsId
})

// data {goodsId,status: "add|minus"}
export const changeGoodsNumAction = (data) => ({
    type: actionTypes.CHANGE_GOODS_NUM,
    data: data
})

export const checkAllGoodsAction = (data) => ({
    type: actionTypes.CHECK_ALL_GOODS,
    data
})

export const setAllGoods = (data) => ({
    type: actionTypes.SET_ALL_GOODS,
    data
})

export const getAllGoodsAction = () => {
    return (dispatch) => {
        getAllGoodsRequest()
            .then(data => {
                dispatch(setAllGoods(data))
            })
    }
}