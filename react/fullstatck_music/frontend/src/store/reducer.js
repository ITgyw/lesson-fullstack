// 模块化 路由模块基本上就是数据模块
import { combineReducers } from "redux";
// store中央
// 地方
import { reducer as recommendReducer } from '@/pages/Recommend/store/index'//as取名
import { reducer as playerReducer } from '@/pages/Player/store/index'
import { reducer as searchReducer } from '@/pages/Search/store/index'
export default combineReducers({
    recommend: recommendReducer,
    player: playerReducer,
    search: searchReducer
})
