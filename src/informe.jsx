import React from "react";
import ReactMarkdown from "react-markdown";

const informe = `
# Informe Auditoría Banco Andes Capital

## Matriz de Riesgos

| Vulnerabilidad     | Evidencia                  | Impacto                        | Severidad CVSS | Controles recomendados                  |
|--------------------|----------------------------|--------------------------------|----------------|-----------------------------------------|
| SQL Injection      | Captura de consulta SQL    | Robo de datos de clientes       | 9.8 (Crítico)  | Consultas parametrizadas, validación    |
| XSS                | Captura de script en input | Robo de sesiones, phishing      | 7.5 (Alta)     | Escapar caracteres, sanitizar entradas  |
| Command Injection  | Captura de ejecución cmd   | Acceso a archivos internos      | 9.0 (Crítico)  | Validar parámetros, listas blancas      |
| CSRF               | Captura de petición forzada| Acciones no autorizadas         | 8.2 (Alta)     | Tokens CSRF, verificación de origen     |
`;

function Informe() {
  return (
    <div style={{ padding: "20px" }}>
      <ReactMarkdown>{informe}</ReactMarkdown>
    </div>
  );
}

export default Informe;

