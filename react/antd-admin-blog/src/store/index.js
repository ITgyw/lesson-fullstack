import { createStore } from 'redux';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
console.log(process.env.NODE_ENV, '---------------------');
// 仓库 
const store = 
    process.env.NODE_ENV === 'development'
        ? createStore(reducers, composeWithDevTools())
        : createStore(reducers);

export default store;