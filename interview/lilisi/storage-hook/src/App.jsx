import { useState, useEffect, useRef } from 'react'
import useLoacalStorageState from './useLocalStorageState';

function App() {
  const ref = useRef();
  const STORAGE_NAME = 'theme'
  const Address_NAME = 'address'
  const defaultValue = {
    'theme': '前端',
    'address': '范家'
  }
  // const [value, setValue] = useState(() => {
  //   const storage = localStorage.getItem(STORAGE_NAME);
  //   return storage || '';
  // })
  const [value, setValue] = useLoacalStorageState(STORAGE_NAME, defaultValue.theme)
  const [address, setAddress] = useLoacalStorageState(Address_NAME, defaultValue.address)
  const [testA, setTestA] = useState('a')
  // 未设置[] 挂载时运行 更新时运行
  useEffect(() => {
    setTestA('b');
    ref.current = 'b';
    console.log(testA, ref.current);
    // console.log(testA);
  }, [])
  // const changeItem = (value) => {
  //   setValue(value)
  //   // localStorage.setItem(STORAGE_NAME, v6rdsaalue)
  // }

  return (
    <div className="App">
      {testA}
      <input value={value} onChange={e => setValue(e.target.value)} />
      <input value={address} onChange={e => setAddress(e.target.value)} />
    </div>
  )
}

export default App
