import React from "react";
import { motion } from "motion/react";
import "./Results.css";
import Synonims from "./Synonims";
import Antonyms from "./Antonyms";

export default function Results(results) {
  if (!results || !results.results.meanings) {
    // If results is null or results.meanings is undefined, show fallback
    return <p>No results to display.</p>;
  }
  return (
    <div className="Results">
      <h2 style={{ fontFamily: "MyFont" }}>{results.results.word}</h2>
      <p>{results.results.phonetic}</p>
      <div>
        {results.results.meanings.map((meaning, index) => (
          <motion.div
            key={`${results.results.word}-${index}`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.5 }}
            style={{
              marginBottom: "1rem",
              borderBottom:
                index < results.results.meanings.length - 1
                  ? "2px solid #ddd"
                  : "none",
              paddingBottom: "1rem",
            }}
          >
            <p
              style={{
                marginBottom: "0",
                color: "#8FB9A8",
                fontSize: "1.2rem",
              }}
            >
              <b>{meaning.partOfSpeech}</b>
            </p>
            <p style={{ color: "#554940", fontSize: "1.1rem" }}>
              {meaning.definition}
            </p>
            {meaning.example && (
              <blockquote style={{ backgroundColor: "#d7e5f0" }}>
                "{meaning.example}"
              </blockquote>
            )}
            <div
              style={{
                textAlign: "right",
                color: "#73787C",
                fontSize: "1.1rem",
              }}
            >
              <Synonims synonims={meaning.synonyms} />
              <Antonyms antonyms={meaning.antonyms} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
