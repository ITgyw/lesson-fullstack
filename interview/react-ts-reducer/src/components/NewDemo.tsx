//rafc
import React from 'react'

interface UserContext {
    username: string;
    setUsername: (value: string) => void;
}
// MyContext 定义上下文里的数据
const MyContext = React.createContext<UserContext>({
    username: "",
    setUsername: (value) => { }
});

export const MyContextProvide = (props: any) => {
    const [username, setUsername] = React.useState("John Doe");
    return (
        // My Provider组件能力
        // <Provider  store={store}></Provider>
        <MyContext.Provider value={{ username, setUsername }}>
            {props.children}
        </MyContext.Provider>
    )
}
const MyEditComponent = () => {
    const { username, setUsername } = React.useContext(MyContext);
    const [newUsername, setNewUsername] = React.useState("")

    const handleChange = (e) => {
        setNewUsername(e.target.value)
    }
    return (
        <div>
            <input placeholder={username} onChange={handleChange} />
            <button onClick={() => setUsername(newUsername)}>Save</button>
        </div>
    )
}

export const NewDemo = () => {
    //  connect 
    const myContext = React.useContext(MyContext)
    return (
        <div>
            <h3>{myContext.username}</h3>
            <MyEditComponent></MyEditComponent>
        </div>
    )
}

