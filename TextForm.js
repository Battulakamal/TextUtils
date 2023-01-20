import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState(" ");

  //functions created for the event handlers
  let handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","success")
  };

  let handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase","success")

  }

  let handleCapitalClick = () =>{
    let newText = text[0].toUpperCase()+text.substring(1);
    setText(newText)
    props.showAlert("converted to capitalize","success")

  }

  let handleRemoveSpacesClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed","success")

  }

  let handleCopyClick = () => {
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value)
    props.showAlert("copied the text","success")

  }

  let handleReverseClick =()=> {
    let newText = text.split("").reverse().join("");
    setText(newText)
    props.showAlert("Reverse the string","success")

  }

  

  let handleClrTxtClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("cleared the text","success")

  }

  // let handleCommaClick = () => {
  //   let newText = text.split(" ",);
  //   setText(newText)
  // }

  let handleOnChange = (e) => {
    setText(e.target.value)

  }

  return (
    <>
    <div className="container my-3"  style={{color:props.mode === 'dark' ?'white':'black'}}>
      <h1>Enter the Text</h1>
      <div className="mb-3" >
        <label htmlFor="myBox" className="form-label">
          {props.heading}
        </label>

        <textarea
          className="form-control"
          id="myBox"
          value={text}
          onChange={handleOnChange}
          style={{color:props.mode === 'light' ?'dark':'light', backgroundColor:props.mode === 'dark'?'grey':'white'}}
          rows="8"
        ></textarea>
      </div>

      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert To UpperCase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>
        Convert To LowerCase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleCapitalClick}>
        Convert To Capitalize
      </button>
      <button className="btn btn-primary mx-2" onClick={handleRemoveSpacesClick}>
        Remove Extra spaces
      </button>
      <button className="btn btn-primary mx-2" onClick={handleCopyClick}>
        Copy the Text
      </button>
      <button className="btn btn-primary mx-2" onClick={handleReverseClick}>
        reverse the Text
      </button>
        {/* <button className="btn btn-primary mx-2" onClick={handleCommaClick}>
        comma separated Text
      </button> */}
      <button className="btn btn-primary mx-2 " onClick={handleClrTxtClick}>
        Clear Text
      </button>
    </div>

    {/* summary section */}
    <div className="container my-2"  style={{color:props.mode === 'dark' ?'white':'black'}}>
        <h1>Text Summary</h1>
        {/* <p>{text.split(" ").length} words and {text.length} charachters</p> */}
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>

        <p>{0.008 * text.split(" ").length} mintues to read</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text :"Enter something in the text box"}</p>

    </div>
    </>
  );
}

export default TextForm;
