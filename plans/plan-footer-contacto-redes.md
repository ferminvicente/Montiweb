# Plan: Footer - Contacto vía WhatsApp + Redes Sociales

## Resumen de cambios solicitados

1. **Reemplazar formulario de contacto** por WhatsApp con caja de texto personalizable + email informativo
2. **Actualizar redes sociales** con los links específicos por plataforma

---

## A. Sección de Contacto (columna 3 del footer)

### Estado actual
Formulario con campos: nombre, email, mensaje + botón "Enviar Solicitud" que envía a FormSubmit.

### Estado deseado
```
[Contacto]
✉️ montimediagroup@gmail.com

[Escríbenos por WhatsApp]
[Caja de texto: Escribe tu mensaje...]
[Enviar por WhatsApp ▸]
```

### Implementación en HTML
Reemplazar el `<form>` actual por:

```html
<div class="footer-contact reveal delay-200">
    <h3 class="footer-title">Contacto</h3>
    
    <!-- Email informativo -->
    <p style="margin-bottom: 1.5rem; color: var(--color-gray-300);">
        ✉️ <a href="mailto:montimediagroup@gmail.com" 
              style="color: var(--color-light); text-decoration: underline;">
            montimediagroup@gmail.com
        </a>
    </p>
    
    <!-- WhatsApp con mensaje personalizable -->
    <p style="font-size: var(--fs-sm); margin-bottom: 0.75rem; color: var(--color-gray-300);">
        Escríbenos por WhatsApp
    </p>
    <div class="form-group" style="margin-bottom: 0.75rem;">
        <textarea id="footer-wp-message" class="form-control" rows="2" 
                  placeholder="Escribe tu mensaje..." 
                  style="resize: none; font-size: var(--fs-sm);"></textarea>
    </div>
    <button onclick="sendFooterWhatsApp()" class="btn footer-btn" 
            style="display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Enviar por WhatsApp
    </button>
</div>
```

### JavaScript necesario (en `app.js`)
Agregar la función:

```javascript
function sendFooterWhatsApp() {
    const message = document.getElementById('footer-wp-message').value.trim();
    const text = message || 'Hola Monti, quiero más información sobre sus servicios.';
    const url = 'https://wa.me/18097124444?text=' + encodeURIComponent(text);
    window.open(url, '_blank');
}
```

---

## B. Redes Sociales (columna 1 del footer)

### Links a actualizar

| Plataforma | Link | Tipo |
|-----------|------|------|
| Instagram Escolares | https://www.instagram.com/montifotografiaescolares/ | Instagram |
| Instagram Social Media | https://www.instagram.com/montiproductoravisual?igsh=Yms5MHN0YmhvdnZw | Instagram |
| Instagram Estudio/Wedding | https://www.instagram.com/montifotografiaestudio_?igsh=dm5peGhteGZwYTlv | Instagram |
| YouTube | https://www.youtube.com/@MontiMediaGroup-i1o | YouTube |

### Propuesta de layout

**Opción recomendada (sin CSS nuevo):** Reemplazar los 3 iconos genéricos por 4 iconos específicos. Los 3 de Instagram se diferencian con el atributo `title` (tooltip al hacer hover) y `aria-label`:

```
[📸 Escolares] [📸 Social Media] [📸 Estudio] [▶️ YouTube]
```

### Implementación en HTML

```html
<div class="footer-socials">
    <!-- Instagram Escolares -->
    <a href="https://www.instagram.com/montifotografiaescolares/" 
       class="social-icon" 
       aria-label="Instagram Escolares" 
       title="Monti Fotografía Escolares">
        <svg>...</svg>
    </a>
    <!-- Instagram Social Media / Productora -->
    <a href="https://www.instagram.com/montiproductoravisual?igsh=Yms5MHN0YmhvdnZw" 
       class="social-icon" 
       aria-label="Instagram Social Media" 
       title="Monti Productora Visual">
        <svg>...</svg>
    </a>
    <!-- Instagram Estudio / Wedding -->
    <a href="https://www.instagram.com/montifotografiaestudio_?igsh=dm5peGhteGZwYTlv" 
       class="social-icon" 
       aria-label="Instagram Estudio" 
       title="Monti Fotografía Estudio">
        <svg>...</svg>
    </a>
    <!-- YouTube -->
    <a href="https://www.youtube.com/@MontiMediaGroup-i1o" 
       class="social-icon" 
       aria-label="YouTube" 
       title="MontiMediaGroup YouTube">
        <svg>...</svg>
    </a>
</div>
```

**Nota:** Los 4 iconos usan SVG de Instagram para los primeros 3 y SVG de YouTube para el último. Esto no requiere cambios en CSS.

---

## C. Archivos a modificar

| Archivo | Cambios |
|---------|---------|
| [`index.html`](index.html:235) | Footer: reemplazar formulario + actualizar redes sociales |
| [`monti-escolares.html`](monti-escolares.html:305) | Footer: reemplazar formulario + actualizar redes sociales |
| [`monti-estudio.html`](monti-estudio.html:155) | Footer: reemplazar formulario + actualizar redes sociales |
| [`monti-social.html`](monti-social.html:155) | Footer: reemplazar formulario + actualizar redes sociales |
| [`app.js`](app.js) | Agregar función `sendFooterWhatsApp()` |

---

## D. Diagrama del nuevo footer

```
┌──────────────────────────────────────────────────────────┐
│  [Logo Monti]        [Navegación]       [Contacto]       │
│                       Inicio            ✉️ email         │
│  Ofrecemos...         Nosotros                             │
│                       Escolares         [Escribe...   ]   │
│  [IG-Esc][IG-SM]     Estudio           [Enviar por WP]   │
│  [IG-Est][YT]        Social Media                         │
│                       Logros                              │
├──────────────────────────────────────────────────────────┤
│  © 2026 Montipage Media Group                             │
└──────────────────────────────────────────────────────────┘
```

---

## E. Tareas

1. En `app.js`: agregar función `sendFooterWhatsApp()`
2. En `index.html`: reemplazar formulario por WhatsApp + email + actualizar redes
3. En `monti-escolares.html`: mismo cambio que index.html
4. En `monti-estudio.html`: mismo cambio
5. En `monti-social.html`: mismo cambio
