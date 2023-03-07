import React, {useState} from "react";

export default function TextForm(props) {

    const handelOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const handleUpClick = ()=>{
        // console.log("uppercase clicked");
        let nText = text.toUpperCase();
        setText(nText);
    }

    const [text, setText] = useState('Enter text here');
    return (
    <>
      <h1>{props.title}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handelOnChange}></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
    </>
  );
}
