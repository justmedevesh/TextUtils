import React, {useState} from 'react'

export default function TextForm(props) {

    const handelUpClick = () => {
        // console.log("uppercase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case" , "success");
    }

    const handelLoClick = () => {
        // console.log("uppercase was clicked" + text);
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case" , "success");
    }

    const handelClearClick = () => {
        // console.log("uppercase was clicked" + text);
        let newText= '';
        setText(newText)
        props.showAlert("Cleared the input box" , "success")
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied in clipboard!" , "success")
    }
    
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra space is removed" , "success")
    }

    const handelOnChange = (event) => {
        // console.log("On changed");
        setText(event.target.value)
    }
    
    const [text, setText] = useState('');
  return (
<>
    <div className="container" style={{color: props.mode === 'dark'?'white':'#08121c'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor: props.mode === 'dark'?'gray':'white' , color: props.mode === 'dark'?'white':'#08121c'}} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handelUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handelLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handelClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
        <button className="btn btn-primary mx-1" onClick={speak}>Speak</button>
    </div>

    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#08121c'}}>
        <h1>Your Text Summary</h1>
        {/* <p>{text.split(" ").length} words and {text.length} character</p> */}
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
        <p>{0.008 * text.split(" ").length}Minutes To Read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter the text in textbox for the preview it here"}</p>
    </div>
</>
  )
}
