import { useState } from 'react'
const useLoacalStorageState = (key, defaultValue) => {
    const data = localStorage.getItem(key)
    const [value, setValue] = useState(data || defaultValue)
    return [
        value,
        (val) => {
            localStorage.setItem(key, val)
            setValue(val)
        }
    ]
}
export default useLoacalStorageState