import { Dispatch } from 'redux'
import {
    getRankingPartitionsRequest, getRankingRequest
} from '@/api/request'
// 页面级别action
// promise.all
export const getHomeDataAction = (rId: string) => {
    return (dispatch: Dispatch) => {
        return Promise.all([
            getRankingPartitionsRequest(),
            getRankingRequest(rId)
        ]).then(([partitionResult, videoResult]) => {

        })
    }
}