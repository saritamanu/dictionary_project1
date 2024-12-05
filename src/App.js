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
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <div>
              <h1 style={{ fontSize: "5rem" }}>Dictionary</h1>
              <p style={{ fontSize: "1.5rem" }} className="text-left">
                Are there enough words in the world?
              </p>
              <DictionaryForm setResults={setResults} />
            </div>
          </div>

          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <Results results={results} /> {/* Pass results */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
