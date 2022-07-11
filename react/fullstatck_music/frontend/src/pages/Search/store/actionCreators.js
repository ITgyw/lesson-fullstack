import * as actionTypes from './constants'
import {
    getHotKeywordsRequest,
    getSuggestListRequest,
    getResultSongsListRequest
} from '@/api/request'


// 创建action

const changeHotKeywords = (data) => ({
    type: actionTypes.SET_HOT_KEYWORDS,
    data
})

const changeSuggestList = (data) => ({
    type: actionTypes.SET_SUGGEUST_LIST,
    data
})

const changeResultSongs = (data) => ({
    type: actionTypes.SET_RESULT_SONGS_LIST,
    data
})

export const changeEnterLoading = (data) => ({
    type: actionTypes.SET_ENTER_LOADING,
    data
})


export const getHotKeywords = () => {
    return (dispatch) => {
        //  拿到HotKeywords数据 
        getHotKeywordsRequest()
            .then(data => {
                // 把数据的hots部分赋给list
                let list = data.result.hots;
                // 触发dispatch -> changeHotKeywords 返回action到reducer修改数据
                dispatch(changeHotKeywords(list))
            })
    }
}

export const getSuggestList = (query) => {
    return dispatch => {
        getSuggestListRequest(query)
            .then(data => {
                if (!data) return;
                let res = data.result || [];
                dispatch(changeSuggestList(res))
            })

        getResultSongsListRequest(query).then(data => {
            if (!data) return;
            let res = data.result.songs || [];
            dispatch(changeResultSongs(res));
            dispatch(changeEnterLoading(false))
        })
    }
}