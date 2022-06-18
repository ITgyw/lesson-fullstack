import { useState } from "react"

function Dog() {
    let [isBarking, setIsBarking] = useState(false)
    let [isRunning, setIsRunning] = useState(false)
    const handleClick = () => {
        // DOM 编程已经一去不复返了
        setIsBarking(true)
        setIsRunning(true)
        setTimeout(() => {
            setIsBarking(false)
            setIsRunning(false)
        }, 2000)
    }
    return (
        <div onClick={handleClick}>
            <div>Dog</div>
            {/* <p>{isBarking ? '汪汪汪' : ''}</p> */}
            <p>{isBarking && '汪汪汪'}</p>
            <p>{isRunning && 'runrun'}</p>
        </div>
    )
}

export default Dog