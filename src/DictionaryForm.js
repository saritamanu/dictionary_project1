import React, { useState } from "react";
import axios from "axios";

export default function DictionaryForm({ setResults }) {
  const [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    setResults(response.data);
    console.log(response.data);
  }
  function search(event) {
    event.preventDefault();
    const apiKey = "7a1ob024b4t960f923f458712f6094e1";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="DictionaryForm">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
