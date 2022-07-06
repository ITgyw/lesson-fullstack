import * as actionTypes from './constants'

const defaultState = {
    hotList: [],
    suggestList: [],
    songsList: [],
    enterLoading: false
}

// redux状态 就是心相印 纸巾？用完就扔
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SET_HOT_KEYWORDS:
            return {
                ...state,
                hotList: action.data
            }
        case actionTypes.SET_SUGGEST_LIST:
            return {
                ...state,
                suggestList: action.data
            }
        case actionTypes.SET_RESULT_LIST:
            return {
                ...state,
                songsList: action.data
            }
        case actionTypes.SET_ENTER_LOADING:
            return {
                ...state,
                enterLoading: action.data
            }
        default:
            return state
    }
}
