import React from "react";

export default function About(props) {
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? '#0b0d12' : 'white'
  };

  return (
    <>
      <div className="container my-3" style={myStyle}>
        <h2>About Us</h2>
        <div className="accordion" id="accordionExample" style={myStyle}>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                About TextUtils
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>TextUtils</strong> is a utility web application designed to help you manipulate text efficiently. Whether you need to count characters, words, or change the case of your text, TextUtils has got you covered. Our goal is to provide a fast and user-friendly tool for your text processing needs.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Features
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>TextUtils</strong> offers a range of features including:
                <ul>
                  <li>Character Count</li>
                  <li>Word Count</li>
                  <li>Text Case Conversion</li>
                  <li>Whitespace Removal</li>
                  <li>Text Formatting</li>
                </ul>
                These features are designed to streamline your text editing tasks and improve your productivity.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                How to Use
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>Using TextUtils</strong> is simple and straightforward:
                <ol>
                  <li>Enter or paste your text into the provided textarea.</li>
                  <li>Select the desired operation from the available options.</li>
                  <li>View the results instantly as the changes are applied.</li>
                </ol>
                Our user-friendly interface ensures that you can perform text manipulations with ease and efficiency.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
