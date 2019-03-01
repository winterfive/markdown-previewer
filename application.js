import React from 'react';
import ReactDOM from 'react-dom';

class MyApp extends React.Component() {
    constructor(props) {
        super(props)

        // props
    }

    //binds

    render() {
        return (
            <div>
                <Editor />
                <Preview />
            </div>
        )
    }
}

const Editor = (props) => {
    return (
        <div><textarea id="editor" /></div>
    )
}

const Preview = (props) => {
    return (
        <div><p id="preview" /></div>
    )
}

ReactDOM.render(<MyApp />, Document.getElementById("appDiv"));