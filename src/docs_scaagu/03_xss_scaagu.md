# Cross-Site Scripting (XSS) en Banco Andes Capital

**Evidencia:**  
Se ingresó el payload `<script>alert('XSS')</script>` en el campo *Message*.  
El navegador ejecutó un *alert*, demostrando ejecución de código malicioso.

**Impacto:**  
Un atacante podría robar cookies de sesión, realizar phishing o manipular la interfaz del portal.

**Severidad (CVSS):** 7.5 – Alto.

**Controles recomendados:**  
- Sanitización de entradas.  
- Escape de caracteres especiales.  
- Implementación de Content Security Policy (CSP).

![Evidencia XSS](/img_scaagu/xss_scaagu.PNG)
