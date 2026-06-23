import React from 'react';
import ReactMarkdown from 'react-markdown';
import informe from './docs/informe.md?raw';

function Informe() {
  return (
    <div style={{ padding: '20px' }}>
      <ReactMarkdown>{informe}</ReactMarkdown>
    </div>
  );
}

export default Informe;
