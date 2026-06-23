import React from "react";
import ReactMarkdown from "react-markdown";
import resumen from "../docs_scaagu/01_resumen_scaagu.md?raw";

function Resumen() {
  return (
    <div style={{ padding: "20px" }}>
      <ReactMarkdown>{resumen}</ReactMarkdown>
    </div>
  );
}

export default Resumen;
