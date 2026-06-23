import React from "react";
import ReactMarkdown from "react-markdown";
import resumen from "../docs/01_resumen.md?raw";

function Resumen() {
  return (
    <div style={{ padding: "20px" }}>
      <ReactMarkdown>{resumen}</ReactMarkdown>
    </div>
  );
}

export default Resumen;
