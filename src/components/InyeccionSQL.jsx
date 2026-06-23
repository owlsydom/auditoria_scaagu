import React from "react";
import ReactMarkdown from "react-markdown";
import sqli from "../docs/02_sqli.md?raw";

function InyeccionSQL() {
  return (
    <div style={{ padding: "20px" }}>
      <ReactMarkdown>{sqli}</ReactMarkdown>
    </div>
  );
}

export default InyeccionSQL;
