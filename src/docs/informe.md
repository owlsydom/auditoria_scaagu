# Informe de Vulnerabilidades – Banco Andes Capital

## SQL Injection
- Evidencia: ![captura](ruta/a/captura_sql.png)
- Descripción: El ataque permite extraer todos los registros de la base de datos.
- Impacto: Robo de datos de clientes.
- Severidad CVSS: 9.8 (Crítico).
- Controles: Consultas parametrizadas, validación de entradas.

## XSS
- Evidencia: ![captura](ruta/a/captura_xss.png)
- Descripción: El navegador ejecuta código malicioso.
- Impacto: Robo de sesiones de clientes.
- Severidad CVSS: 7.5 (Alta).
- Controles: Escapar caracteres, sanitizar entradas.

## Command Injection
- Evidencia: ![captura](ruta/a/captura_cmd.png)
- Descripción: El servidor ejecuta comandos arbitrarios.
- Impacto: Acceso a archivos internos.
- Severidad CVSS: 9.0 (Crítico).
- Controles: Validar parámetros, usar listas blancas.
