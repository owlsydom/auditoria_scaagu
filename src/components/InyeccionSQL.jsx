import React from "react";
import ReactMarkdown from "react-markdown";
import sqli from "../docs_scaagu/02_sqli_scaagu.md?raw";

function InyeccionSQL() {
  return (
    <div style={{ padding: "20px" }}>
      <ReactMarkdown>{sqli}</ReactMarkdown>
    </div>
  );
}

export default InyeccionSQL;
