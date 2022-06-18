import React from "react";

const Editor = (props) => {

    const { updateEntity } = props

    return (
        <div className="ui form">
            <div className="filed">
                <textarea
                    rows="5"
                    placeholder="写点东西"
                    // react 非常接近原生JS的框架
                    onInput={(event) => { updateEntity(event) }}
                />
            </div>
        </div>
    )
}

export default Editor;