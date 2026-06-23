# Matriz de Riesgos - Banco Andes Capital

## Evaluación de Vulnerabilidades

| Vulnerabilidad | CVSS | Probabilidad | Impacto | Riesgo |
|---|---|---|---|---|
| SQL Injection | 9.8 | Alta | Crítico | 🔴 Crítico |
| XSS | 7.5 | Alta | Alto | 🟠 Alto |
| Command Injection | 9.0 | Media | Crítico | 🔴 Crítico |
| Falta de Validación | 8.2 | Alta | Alto | 🟠 Alto |

## Matriz de Trazabilidad

### SQL Injection
- **ID:** VULN-001
- **CVSS:** 9.8 (Crítico)
- **Componente:** Módulo de búsqueda de usuarios
- **Control:** Consultas parametrizadas

### XSS
- **ID:** VULN-002
- **CVSS:** 7.5 (Alto)
- **Componente:** Formulario de mensajes
- **Control:** Sanitización de entradas

### Command Injection
- **ID:** VULN-003
- **CVSS:** 9.0 (Crítico)
- **Componente:** Herramienta de diagnóstico
- **Control:** Validación estricta

## Conclusión

El sistema requiere mitigación inmediata de vulnerabilidades críticas.
