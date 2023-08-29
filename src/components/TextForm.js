import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick= ()=>{
        // console.log("UpperCase was clicked"+text);
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase!", "success")
    }

    const handleLoClick= ()=>{
        // console.log("UpperCase was clicked"+text);
        let newText=text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success")
    }

    const handleClear = () => {
        setText("");
        props.showAlert("Cleared Text!", "success")
    }

    const handleOnChange= (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }

    const handleCopy = ()=>{
        var text=document.getElementById("TextBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied text!", "success")
    }

    const handleExtraSpaces = () => {
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces are removed!", "success")
    }
    // hooks
    const [text, setText] = useState('');

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#00193d'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='light'?'white':'#112d55', color: props.mode==='dark'?'white':'#00193d'}} onChange={handleOnChange} id="TextBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

        </div>

        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#00193d'}}> 
            <h3>Your Text Summary</h3>
            <p>{text.split(" ").filter((element)=> {return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=> {return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}

