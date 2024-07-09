import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("Enter Text here");

  const handleUpClick = () => {
    
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
   
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
  };
  const handleOnChange = (event) => {
   
    setText(event.target.value);
  };
  const handleCopyClick = () => {
    
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
  };
  const handleExtraSpacesClick = () => {
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  return (
    <>
     <div className="container"style={{ color:props.mode === 'dark'? 'white': 'black'}}>
      <div>
        <h1>Enter A Text to Analayz </h1>
        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="5"
            style={{ backgroundColor:props.mode === 'light'? 'white': '#0b0d12',color:props.mode === 'dark'? 'white': 'black'}}
          ></textarea>
          <button
            type="button"
            disabled ={text.length === 0}
            onClick={handleUpClick}
            className="btn btn-primary my-3 mx-2"
          >
            Convert To UpperCase
          </button>
          <button
            type="button"
            disabled ={text.length === 0}
            onClick={handleLoClick}
            className="btn btn-primary my-3"
          >
            Convert To LowerCase
          </button>
          <button
            type="button"
            disabled ={text.length === 0}
            onClick={handleClearClick}
            className="btn btn-primary my-3 mx-2"
          >
            Clear text
          </button>
          <button
            type="button"
            disabled ={text.length === 0}
            onClick={handleCopyClick}
            className="btn btn-primary my-3 mx-2"
          >
            Copy text
          </button>
          <button
            type="button"
            disabled ={text.length === 0}
            onClick={handleExtraSpacesClick}
            className="btn btn-primary my-3 mx-2"
          >
            Remove Extra Space
          </button>
        </div>
      </div>

      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words and {text.length} characters.
        </p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
      </div>
    </>
  );
}
