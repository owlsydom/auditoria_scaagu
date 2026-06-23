import React from "react";
import ReactMarkdown from "react-markdown";
import recuperacion from "../docs_scaagu/08_recuperaciones_scaagu.md?raw";

function Recuperacion() {
  return (
    <div style={{ padding: "20px" }}>
      <ReactMarkdown>{recuperacion}</ReactMarkdown>
    </div>
  );
}

export default Recuperacion;
