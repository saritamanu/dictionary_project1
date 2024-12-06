import React, { useState } from "react";
import { motion } from "motion/react";
import "./DictionaryForm.css";
import axios from "axios";

export default function DictionaryForm({ setResults, setPhotos }) {
  const [keyword, setKeyword] = useState("hello");
  const [loaded, setLoaded] = useState(false);

  function handleResponseDic(response) {
    setResults(response.data);
    console.log(response.data);
  }
  function handleResponsePhoto(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }
  function search() {
    const apiKey = "7a1ob024b4t960f923f458712f6094e1";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponseDic);

    const photosApiKey = "7a1ob024b4t960f923f458712f6094e1";
    const photosApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photosApiKey}`;

    axios.get(photosApiUrl).then(handleResponsePhoto);
  }

  function handleSearch(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="DictionaryForm row">
        <form
          onSubmit={handleSearch}
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <input
            className="form-control"
            style={{
              width: "100%",
              height: "3rem",
              fontSize: "1rem",
            }}
            type="search"
            placeholder="Type a word..."
            onChange={handleKeywordChange}
            defaultValue={keyword}
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="button-56"
            type="submit"
          >
            Search
          </motion.button>
        </form>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
