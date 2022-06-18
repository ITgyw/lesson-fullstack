// import { useState } from 'react'
import { GlobalStyle, Tab, TabItem } from './style' // style.js 
// styled-compoennts    styled 定义一段样式
// createGlobalStyle    定义全局样式
// compoennts           以组件的方式来返回


// console.log(GlobalStyle);
// 组件化思想  不以html的思维看待，而是把一个功能块作为一个组件来看待，将页面分成几个部分就像html里的section标签
function App() {


  return (
    <div className='App'>
      <GlobalStyle></GlobalStyle>
      <Tab>
        <a className='selected'>
          <TabItem>
            <span>推荐</span>
          </TabItem>
        </a>
        <a>
          <TabItem>
            <span>歌手</span>
          </TabItem>
        </a>
        <a>
          <TabItem>
            <span>排行榜</span>
          </TabItem>
        </a>
      </Tab>
    </div>
  )

}

export default App
