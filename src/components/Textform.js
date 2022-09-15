import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
    const [text, setText] = useState("Hello")

    function handleOnChange(event) {
        setText(event.target.value)
    }

    function handleUpClick() {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to upper case", "success")
    }
    function handleLowClick() {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lower case", "success")
    }
    function handleClearClick() {
        let newText = ""
        setText(newText)
        props.showAlert("Text cleared", "success")
    }
    function handleCopyClick() {
        let newText = document.getElementById("box")
        newText.select()
        navigator.clipboard.writeText(newText.value)
        props.showAlert("Text copied to clipboard", "success")
    }

    return (
        <>
            <div style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <div className="mb-3">
                    <h3 className="my-2">{props.heading}</h3>
                    <textarea className="form-control" id="box" value={text} rows="8" onChange={handleOnChange} 
                    style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'black' : 'white' }}>
                    </textarea>
                </div>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Upper Case</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick} >Convert to Lower Case</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick} >Clear Text</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick} >Copy Text</button>
            </div>
            <div className="my-4" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h3>Text Summary : </h3>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
                <h4>Preview</h4>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}
