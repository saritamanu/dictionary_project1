import "./App.css";
import DictionaryForm from "./DictionaryForm";

function App() {
  return (
    <div className="App">
      <div className="container-fluid" style={{ height: "100vh" }}>
        <div className="row h-50">
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <div>
              <h1 style={{ fontSize: "5rem" }}>Dictionary</h1>
              <p style={{ fontSize: "1.5rem" }} className="text-left">
                Are there enough words in the world?
              </p>
              <DictionaryForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
