import { applyMiddleware, compose, createStore } from 'redux'
import reducers from './reducer' // 合并
import thunk, { ThunkMiddleware } from 'redux-thunk'
// ts  as  做强制类型声明 断言
const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,
    composeEnhancers(
        applyMiddleware(
            // 断言   dispatch 异步 action  ts  -> ThunkMiddleware
            thunk as ThunkMiddleware
        )
    ))

// rootState  state 状态类型
// type 和 interface 都是 ts 里的类型声明
// 用 type 自定义类型 
export type rootState = ReturnType<typeof reducers>

export default store;
