import React, { useState } from "react";
import "./App.css";
import DictionaryForm from "./DictionaryForm";
import Results from "./Results";

function App() {
  const [results, setResults] = useState(null); // Lift results state up
  return (
    <div className="App">
      <div className="container-fluid" style={{ height: "100vh" }}>
        <div className="row h-100">
          <div className="col-md-4">
            <div
              className="left-section"
              style={{ marginTop: "5%", marginRight: "5%" }}
            >
              <h1 style={{ fontSize: "3rem", fontFamily: "MyFont" }}>
                Dictionary
              </h1>
              <p
                style={{ fontSize: "1.5rem", paddingLeft: "5px" }}
                className="text-left"
              >
                Are there enough words in the world?
              </p>
              <DictionaryForm setResults={setResults} />
            </div>
          </div>

          <div style={{ marginTop: "5%" }} className="col-md-7 ">
            <div>{results && <Results results={results} />}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
