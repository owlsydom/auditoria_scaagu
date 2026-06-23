# Command Injection en Banco Andes Capital

**Evidencia:**  
Se ingresó el comando `127.0.0.1; cat /etc/passwd` en el campo *IP Address*.  
El sistema devolvió el contenido del archivo `/etc/passwd`, demostrando ejecución arbitraria en el servidor.

**Impacto:**  
Un atacante podría ejecutar comandos peligrosos, comprometer el servidor y acceder a información crítica.

**Severidad (CVSS):** 9.0 – Crítico.

**Controles recomendados:**  
- Validación estricta de parámetros.  
- Uso de listas blancas para entradas.  
- Restricción de privilegios en procesos.

![Evidencia Command Injection](/img_scaagu/comandos_scaagu.PNG)
