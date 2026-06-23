import React from "react";
import ReactMarkdown from "react-markdown";
import xss from "../docs_scaagu/03_xss_scaagu.md?raw";

function XSS() {
  return (
    <div style={{ padding: "20px" }}>
      <ReactMarkdown>{xss}</ReactMarkdown>
    </div>
  );
}

export default XSS;
