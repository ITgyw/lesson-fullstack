import { useState } from 'react'
import useLoacalStorageState from './useLocalStorageState';

function App() {
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
  // const changeItem = (value) => {
  //   setValue(value)
  //   // localStorage.setItem(STORAGE_NAME, v6rdsaalue)
  // }

  return (
    <div className="App">
      <input value={value} onChange={e => setValue(e.target.value)} />
      <input value={address} onChange={e => setAddress(e.target.value)} />
    </div>
  )
}

export default App
