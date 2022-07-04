import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
// 报错 ts好牛  ts 可以让js更安全
ReactDOM.render(
    <div>
        <App></App>
    </div>,
    document.getElementById('root')
)