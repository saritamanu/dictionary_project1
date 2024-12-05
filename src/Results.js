import React from "react";
import "./Results.css";
import Synonims from "./Synonims";

export default function Results(results) {
  if (!results || !results.results.meanings) {
    // If results is null or results.meanings is undefined, show fallback
    return <p>No results to display.</p>;
  }
  return (
    <div className="Results">
      <h2>{results.results.word}</h2>
      <p>{results.results.phonetic}</p>
      {results.results.meanings.map((meaning, index) => (
        <div key={index}>
          <p style={{ marginBottom: "0" }}>
            <b>{meaning.partOfSpeech}</b>
          </p>
          <p> {meaning.definition}</p>
          {meaning.example && <blockquote>"{meaning.example}"</blockquote>}
          <Synonims synonims={meaning.synonyms} />
        </div>
      ))}
      {/* <Synonims synonims={results} /> */}
    </div>
  );
}
