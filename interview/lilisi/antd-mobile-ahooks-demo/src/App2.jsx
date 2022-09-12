import { useState } from 'react'
import { useRequest } from 'ahooks'
import { getUsername } from './api/request'
// 数据请求  经常出现 ahooks
// data
// loading
// error

function App() {
  // 如果数据很多的话 给data取别名 data: usaeName
  const { data: userName, error, loading } = useRequest(getUsername)
  if (error) return <div>failed to load</div>
  if (loading) return <div>loading ...</div>
  return (
    <div className="App">
      Username: {userName}
    </div>
  )
}

export default App
