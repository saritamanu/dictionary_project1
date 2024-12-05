import React from "react";

export default function Antonyms(props) {
  if (!props.antonyms) return null;
  return (
    <div>
      <small style={{ marginBottom: "0" }}>
        <b>Antonyms</b>
      </small>
      <br />
      <small>
        {" "}
        {props.antonyms.map((antonym, index) =>
          index < props.antonyms.length - 1 ? `${antonym}, ` : antonym
        )}
      </small>
    </div>
  );
}
