import { Dispatch, AnyAction } from "redux";
import * as ActionTypes from '../action-types'
import { getHotwordRequest } from '@/api'

export const setHotword = (data: any[]): AnyAction => ({
    type: ActionTypes.SET_HOTWORD,
    data
})

export const getHotword = () => {
    return (dispatch: Dispatch<AnyAction>) => {
        // 请求数据？
        dispatch(setHotword([]))
    }
}
