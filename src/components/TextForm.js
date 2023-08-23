import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick= ()=>{
        // console.log("UpperCase was clicked"+text);
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase!", "success")
    }

    const handleOnChange= (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }
    // hooks
    const [text, setText] = useState('');

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#00193d'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='light'?'white':'#00193d', color: props.mode==='dark'?'white':'#00193d'}} onChange={handleOnChange} id="TextBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>

        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#00193d'}}> 
            <h3>Your Text Summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters</p>
        </div>
        </>
    )
}

