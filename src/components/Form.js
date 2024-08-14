import React, { useState } from 'react'

export default function Form(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Convrted into Upercase', 'primary');
        
    }

    const  handleLoClick = () => {
        let newText1 = text.toLowerCase();
        setText(newText1)
        props.showAlert('Convrted into Lowercase', 'success')
    }

    const handleCapClick = () => {
        let newText2 = text.replace(/\b\w/g, x => x.toUpperCase());
        setText(newText2)
        props.showAlert('Convrted firstLetter of word into Upercase', 'success')
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Successfully Copy', 'success')
    }

    const handleExtraSpaces = () => {
        let newText4 = text.split(/[ ]+/);
        setText(newText4.join(' '))
        props.showAlert('Remove Extra spaces', 'warning')
    }

    const handleClearClick = () => {
        let newText5 = '';
        setText(newText5)
        props.showAlert('Successfully clear', 'danger')
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here");
    return (
        <>
        <div className='container'  style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>

            <button className="btn btn-primary mx-1 my-1" style={{backgroundColor : props.mode==='dark'?'grey':'btn-primary'}} onClick={handleUpClick}> Convert to Uppercase</button>

            <button className="btn btn-primary mx-1 my-1" style={{backgroundColor : props.mode==='dark'?'grey':'btn-primary'}} onClick={handleLoClick}> Convert to Lowercase</button>

            <button className="btn btn-primary mx-1 my-1" style={{backgroundColor : props.mode==='dark'?'grey':'btn-primary'}} onClick={handleCapClick}> Capitalized first letter</button>

            <button className="btn btn-primary mx-1 my-1" style={{backgroundColor : props.mode==='dark'?'grey':'btn-primary'}} onClick={handleCopyClick}> Copy Text</button>

            <button className="btn btn-primary mx-1 my-1" style={{backgroundColor : props.mode==='dark'?'grey':'btn-primary'}} onClick={handleExtraSpaces}> Remove Extra Spaces</button>

            <button className="btn btn-primary mx-1 my-1" style={{backgroundColor : props.mode==='dark'?'grey':'btn-primary'}} onClick={handleClearClick}> Clear Text</button>
        </div>

        <div className="container my-3" style = {{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>Your text summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} Words and {text.length} Character</p>
        </div>
        </>
    )
}
