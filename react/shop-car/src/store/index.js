import { createStore, compose, applyMiddleware } from 'redux';
// 组件  中间件redux-thunk   数据
import thunk from 'redux-thunk' // 异步数据管理
import reducer from './reducer'
import logger from 'redux-logger' // reducer 调试更优秀

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,
    // 组合函数
    // devtool
    // compose会将中间件 合并成中间件对象
    compose(
        // UI组件 中间件 redux-thunk -> applyMiddleware启用   Store
        composeEnhancers(applyMiddleware(thunk)),
        applyMiddleware(logger)
    )
    // composeEnhancers(
    //     // 异步 
    //     applyMiddleware(thunk)
    // )
)

export default store;
