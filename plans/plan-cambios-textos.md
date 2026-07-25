# Plan: Cambios de textos + navbar en monti-escolares.html

## Cambios solicitados

### A. Textos en [`monti-escolares.html`](monti-escolares.html)

| # | Actual | Nuevo | Línea |
|---|--------|-------|-------|
| 1 | `Elige el plan que mejor se adapte a las necesidades de tu institución.` | `Invierte en tu marca` | 120 |
| 2 | `ITBIS no incluido` (Esencial) | `Impuesto no incluido` | 133 |
| 3 | `ITBIS no incluido` (Premium) | `Impuesto no incluido` | 168 |
| 4 | `Plan Admisiones Institucional` | `Plan Web Institucional` | 198 |
| 5 | Agregar feature: "Mantenimiento incluido el 1er año" | Nuevo `<li>` | después de línea 211 |
| 6 | Agregar feature: "Cambios y ajustes para optimización" | Nuevo `<li>` | después del anterior |
| 7 | `Planes para Colegios` → mayúscula | Poner `text-transform: uppercase` vía CSS en `.section-header h2` | 119 |
| 8 | `Colegios que confían en nosotros` → mayúscula + 1 línea | `text-transform: uppercase` + `font-size` responsive | 242 |

### B. Navbar: quitar "Servicios"

| Archivo | Línea | Acción |
|---------|-------|--------|
| [`monti-escolares.html`](monti-escolares.html:64) | 64 | Eliminar `<a href="index.html#services" class="nav-link">Servicios</a>` |
| [`monti-estudio.html`](monti-estudio.html:42) | 42 | Eliminar `<a href="index.html#services" class="nav-link">Servicios</a>` |
| [`monti-social.html`](monti-social.html:42) | 42 | Eliminar `<a href="index.html#services" class="nav-link">Servicios</a>` |
| [`index.html`](index.html:43) | 43 | **Mantener** (es la página de inicio) |

## Archivos a modificar

### 1. [`monti-escolares.html`](monti-escolares.html)
- Línea 64: eliminar link "Servicios" del navbar
- Línea 119: `Planes para Colegios` → `PLANES PARA COLEGIOS` (hardcode en HTML)
- Línea 120: cambiar subtítulo
- Línea 133: cambiar "ITBIS" → "Impuesto"
- Línea 168: cambiar "ITBIS" → "Impuesto"
- Línea 198: cambiar nombre del plan
- Líneas 211-212: agregar 2 `<li>` features nuevos
- Línea 242: `Colegios que confían en nosotros` → `COLEGIOS QUE CONFÍAN EN NOSOTROS` (hardcode)

### 2. [`monti-estudio.html`](monti-estudio.html)
- Línea 42: eliminar link "Servicios"

### 3. [`monti-social.html`](monti-social.html)
- Línea 42: eliminar link "Servicios"

### 4. [`index.css`](index.css)
- Sin cambios CSS — las mayúsculas se ponen directo en HTML para no afectar otras páginas
- El título del carrusel se maneja con `font-size` responsive ya existente

## Diagrama navbar resultante

```
monti-escolares.html:     Nosotros | Escolares | Estudio | Social Media | Logros | Contacto
monti-estudio.html:       Nosotros | Escolares | Estudio | Social Media | Logros | Contacto
monti-social.html:        Nosotros | Escolares | Estudio | Social Media | Logros | Contacto
index.html:               Nosotros | Servicios | Escolares | Estudio | Social Media | Logros | Contacto
```
