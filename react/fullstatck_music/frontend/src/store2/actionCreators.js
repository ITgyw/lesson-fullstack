//组件不可以染指数据请求，页面级别组件中看不到api
//action中 redux指定可以数据流动开始的地方
//redux 之后,UI更纯粹
//应用开发分成 UI+数据管理
//store reducer defaultState -> action api->reducer重新计算-》通知connect UI更新

import { getBannerRequest, getRankListRequest ,getSingersListRequest} from "../api/request"
export const changeBannerList = (data) => ({
    type: 'CHANGE_BANNER',
    data
})
//action函数
export const getBannerList = () => {
    return (dispatch) => {
        getBannerRequest().then(data => {
            const action = changeBannerList(data.banners)
            dispatch(action)
        })
    }
}
export const changeRankList=(data)=>({
    type:'CHANGE_RANKLIST',
    data
})
export const getRankList = () => {
    //api 异步
    return (dispatch) => {
        getRankListRequest().then(data=>{
            console.log(data,dispatch);
            //{type:'修改tag',data}
            const action=changeRankList(data.list)
            console.log('action:',action);
            //dispatch这种格式的对象，才能触发reducer重新计算
            dispatch(action)
        })

    }
}
export const changeSingersList=(data)=>({
    type:'CHANGE_SINGERSLIST',
    data
})
export const getSingersList = () => {
    //api 异步
    return (dispatch) => {
        getSingersListRequest().then(data=>{
            console.log(data,dispatch);
            //{type:'修改tag',data}
            const action=changeSingersList(data.list)
            console.log('action:',action);
            //dispatch这种格式的对象，才能触发reducer重新计算
            dispatch(action)
        })

    }
}