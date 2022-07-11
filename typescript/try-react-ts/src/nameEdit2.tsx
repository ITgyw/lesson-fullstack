import React, { useState } from 'react'

interface Props {
    userName: string;
    onNameUpdated: (newName: string) => void;
}

const NameEditComponent: React.FC<Props> = (props) => {
    const [editingName, setEditingName] = useState(props.userName);
    // React 提供了ChangeEvent  
    // change事件通过 泛型 来指定他为input的change事件
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditingName(e.target.value)
    }
    const onNameSubmit = () => {
        props.onNameUpdated(editingName)
    }
    return (
        <>
            {/* vscode 用ts写出来的 */}
            {props.userName}
            <input value={editingName} onChange={onChange} />
            <button onClick={onNameSubmit}>change</button>
        </>
    )
}
export default NameEditComponent