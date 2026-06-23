import React from "react";
import ReactMarkdown from "react-markdown";
import prompts from "../docs_scaagu/09_prompts_scaagu.md?raw";

function Prompts() {
  return (
    <div style={{ padding: "20px" }}>
      <ReactMarkdown>{prompts}</ReactMarkdown>
    </div>
  );
}

export default Prompts;
