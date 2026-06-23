import React from "react";
import ReactMarkdown from "react-markdown";
import comandos from "../docs_scaagu/04_comandos_scaagu.md?raw";

function Comandos() {
  return (
    <div style={{ padding: "20px" }}>
      <ReactMarkdown>{comandos}</ReactMarkdown>
    </div>
  );
}

export default Comandos;
