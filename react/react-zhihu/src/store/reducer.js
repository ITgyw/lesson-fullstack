import { combineReducers } from 'redux'

import { reducer as recommendReducer } from '@/pages/Home/HomeRecommend/Banners/store/index'

export default combineReducers({
    recommend: recommendReducer
})