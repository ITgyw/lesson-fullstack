import * as actionTypes from './constans'
const defaultState = {
    bannerList: [],
    recommendList: [],
    enterLoading: true
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_BANNER:
            return {
                ...state,
                bannerList: action.data
            }
        case actionTypes.CHANGE_RECOMMEND_LIST:
            return {
                ...state,
                recommendList: action.data
            }
        default:

            return state

    }
    return state
}