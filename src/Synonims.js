import React from "react";

export default function Synonims(props) {
  if (!props.synonims) return null;
  return (
    <div>
      <small style={{ marginBottom: "0" }}>
        <b>Synonims</b>
      </small>
      <br />
      <small>
        {props.synonims.map((synonim, index) =>
          index < props.synonims.length - 1 ? `${synonim}, ` : synonim
        )}
      </small>
    </div>
  );
}
