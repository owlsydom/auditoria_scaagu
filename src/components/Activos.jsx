import React from "react";
import ReactMarkdown from "react-markdown";
import activos from "../docs_scaagu/05_activos_scaagu.md?raw";

function Activos() {
  return (
    <div style={{ padding: "20px" }}>
      <ReactMarkdown>{activos}</ReactMarkdown>
    </div>
  );
}

export default Activos;
