# Activos Evaluados - Banco Andes Capital

## Infraestructura Evaluada

| Activo | Tipo | Estado | Vulnerabilidades |
|--------|------|--------|------------------|
| Portal de Clientes | Aplicación Web | Vulnerable | SQL Injection, XSS, Command Injection |
| Base de Datos | DBMS | Vulnerable | Inyección SQL sin validación |
| Servidor Web | Apache/Nginx | Comprometido | Ejecución de comandos arbitrarios |
| Sistema Operativo | Linux | Expuesto | Acceso no autorizado |

## Consideraciones de Seguridad

- **Aplicaciones:** No implementan validación de entradas
- **Base de Datos:** Consultas dinámicas sin parametrización
- **Servidor:** Permisos excesivos en procesos web
- **Red:** Sin WAF (Web Application Firewall)

## Recomendaciones Prioritarias

1. Implementar WAF inmediatamente
2. Aplicar parches de seguridad
3. Realizar análisis de código estático
4. Implementar monitoreo de seguridad
