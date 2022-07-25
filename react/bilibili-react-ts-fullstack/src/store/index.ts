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

export default store;
