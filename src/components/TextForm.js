import React, { useState } from "react";

export default function TextForm(props) {
  const handelOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const handleUpClick = () => {
    // console.log("uppercase clicked");
    let nText = text.toUpperCase();
    setText(nText);
    {props.handleAlert("Converted to Uppercase", "success")}
  };
  const handleLoClick = () => {
    let nText = text.toLowerCase();
    setText(nText);
    props.handleAlert("Converted to Lowercase", "success");
  };
  const handleExtraSpaces = () => {
    let nText = text.split(/[ ]+/);
    setText(nText.join(" "));
    props.handleAlert("Extra spaces removed", "success");
  };
  const handleCopyToClip = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.handleAlert("Copied to clipboard", "success");
  };
  const handleClear = () => {
    let text = '';
    setText(text);
    props.handleAlert("Cleared", "success");
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
        <h1>{props.title}</h1>
        <div className="mb-3">
          <textarea
            className="form-control" id="myBox" rows="8" value={text} onChange={handelOnChange} style={{backgroundColor: props.mode==='light'?'grey':'white', color: props.mode==='light'?'white':'black'}}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyToClip}>
          Copy to clipboard
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div className="container my-2" style={{color: props.mode==='light'?'black':'white'}}>
        <p>{text.split(" ").length===1 && text.length===0 ? 0 : text.split(" ").length} Words and {text.length} Characters</p>
        <p>{text.split(" ").length * 0.2} seconds needed to read this</p>
      </div>
    </>
  );
}
