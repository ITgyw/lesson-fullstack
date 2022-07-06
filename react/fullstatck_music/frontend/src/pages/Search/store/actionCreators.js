import * as actionTypes from './constants'

import {
    getHotKeyWordsRequest,
    getSuggestListRequest,
    getResultSongsListRequest
} from '@/api/request'

const changeHotKeyWords = (data) => ({
    type: actionTypes.SET_HOT_KEYWORDS,
    data
})

const changeSuggestList = (data) => ({
    type: actionTypes.SET_SUGGEST_LIST,
    data
})

const changeResultSongs = (data) => ({
    type: actionTypes.SET_RESULT_LIST,
    data
})

export const changeEnterLoading = (data) => ({
    type: actionTypes.SET_ENTER_LOADING,
    data
})