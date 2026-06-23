# Controles Recomendados - Banco Andes Capital

## Controles de Entrada

### Validación
- ✅ Whitelist de caracteres permitidos
- ✅ Límites de longitud estrictos
- ✅ Validación en cliente y servidor
- ✅ Rechazo de patrones sospechosos

### Sanitización
- ✅ Escape de caracteres especiales
- ✅ Codificación HTML
- ✅ Eliminación de etiquetas peligrosas

## Controles de Base de Datos

### Consultas Seguras
```sql
-- ❌ Inseguro
SELECT * FROM users WHERE id = ' + userInput + '

-- ✅ Seguro (Prepared Statements)
PREPARE stmt FROM 'SELECT * FROM users WHERE id = ?'
EXECUTE stmt USING @userInput
```

### Principio de Menor Privilegio
- Cuentas separadas por función
- Permisos mínimos necesarios
- Auditoría de accesos

## Controles de Aplicación

### Content Security Policy (CSP)
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self'">
```

### Rate Limiting
- Máximo de intentos por IP
- Throttling de solicitudes
- Bloqueo temporal de IPs

## Controles de Monitoreo

- 📊 Logs de acceso centralizados
- 🚨 Alertas de intentos sospechosos
- 🔍 Análisis de patrones de ataque
- 📋 Auditoría periódica
