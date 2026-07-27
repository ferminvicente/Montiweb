# Plan: Tarjetas de Servicios con Imágenes de Fondo y Textos Actualizados

## Objetivo

Modificar las 3 tarjetas de la sección "Nuestros Servicios" en [`index.html`](index.html:180) para:
1. Cambiar "Monti Fotografia Estudio" → **"Monti Wedding"** con descripción y tags de bodas
2. Cambiar "Social Media" → **"Monti Social Media"** (solo título)
3. Agregar imágenes de fondo a cada tarjeta con overlay oscuro para legibilidad
4. Ajustar colores de texto para que sean visibles sobre las imágenes
5. Reemplazar íconos SVG por unos más alusivos a cada servicio

---

## Estado Actual

### Card 1 — Escolares (`index.html:180-199`)
```html
<a href="monti-escolares.html" class="service-card service-card-link reveal">
  <!-- icono cámara -->
  <h3 class="service-title">Monti Fotografías Escolares</h3>
  <p class="service-desc">Cobertura fotográfica premium...</p>
  <div class="service-tags">
    <span class="service-tag">Retratos</span>
    <span class="service-tag">Graduaciones</span>
    <span class="service-tag">Eventos Escolares</span>
  </div>
</a>
```
- Fondo: `var(--color-gray-100)` (gris claro)
- Texto: oscuro sobre fondo claro
- Ícono: cámara fotográfica (genérico)

### Card 2 — Actual "Monti Fotografia Estudio" → Wedding (`index.html:201-219`)
```html
<a href="monti-estudio.html" class="service-card service-card-dark service-card-link reveal delay-100">
  <!-- icono escudo -->
  <h3 class="service-title">Monti Fotografia Estudio</h3>
  <p class="service-desc">Sesiones profesionales en nuestro estudio...</p>
  <div class="service-tags">
    <span class="service-tag">Retrato Editorial</span>
    <span class="service-tag">Productos</span>
    <span class="service-tag">Sesiones de Marca</span>
  </div>
</a>
```
- Fondo: `var(--color-black)` (negro)
- Texto: blanco sobre fondo oscuro
- Ícono: escudo (no alusivo a wedding)

### Card 3 — Social Media → Monti Social Media (`index.html:221-241`)
```html
<a href="monti-social.html" class="service-card service-card-dark service-card-link reveal delay-300">
  <!-- icono chat/burbuja -->
  <h3 class="service-title">Social Media</h3>
  <p class="service-desc">Estrategias integrales de posicionamiento digital...</p>
  <div class="service-tags">
    <span class="service-tag">Content Strategy</span>
    <span class="service-tag">Growth</span>
    <span class="service-tag">Branding Digital</span>
  </div>
</a>
```
- Fondo: `var(--color-black)` (negro)
- Texto: blanco sobre fondo oscuro
- Ícono: burbuja de chat (poco alusivo a marketing)

---

## Cambios a Realizar

### 1. HTML — Card 1: Escolares

| Elemento | Actual | Nuevo |
|----------|--------|-------|
| Clases | `service-card service-card-link reveal` | Agregar `service-card-image service-card-escolar` |
| Ícono SVG | Cámara (genérico) | 🎓 **Gorro de graduación** (graduation cap) — más alusivo a escolares |

**Nuevo SVG para Escolares — Gorro de Graduación:**
```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M22 10l-10-5L2 10l10 5 10-5z"></path>
  <path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"></path>
</svg>
```

### 2. HTML — Card 2: "Monti Fotografia Estudio" → "Monti Wedding"

| Elemento | Actual | Nuevo |
|----------|--------|-------|
| Clases | `service-card-dark` | Eliminar `service-card-dark`, agregar `service-card-image service-card-wedding` |
| Título | `Monti Fotografia Estudio` | `Monti Wedding` |
| Descripción | *texto de estudio* | `Fotografía y video cinematográfico para bodas. Capturamos cada instante de tu día especial con la calidad premium que distingue a Montipage.` |
| Tags | `Retrato Editorial`, `Productos`, `Sesiones de Marca` | `Bodas`, `Recepción`, `Video` |
| Ícono SVG | Escudo | ❤️ **Corazón** (amor/boda) |

**Nuevo SVG para Wedding — Corazón:**
```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
</svg>
```

### 3. HTML — Card 3: "Social Media" → "Monti Social Media"

| Elemento | Actual | Nuevo |
|----------|--------|-------|
| Clases | `service-card-dark` | Eliminar `service-card-dark`, agregar `service-card-image service-card-social` |
| Título | `Social Media` | `Monti Social Media` |
| Descripción | *texto actual* | **Sin cambios** |
| Tags | *actuales* | **Sin cambios** |
| Ícono SVG | Burbuja de chat | 📈 **Trending Up** (crecimiento/marketing) |

**Nuevo SVG para Social Media — Trending Up (marketing/crecimiento):**
```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
  <polyline points="17 6 23 6 23 12"></polyline>
</svg>
```

### 4. CSS Nuevo — Tarjetas con imagen de fondo

Agregar al final del bloque `.services-section` en [`index.css`](index.css:797) (antes del footer):

```css
/* ==========================================================================
   SERVICE CARDS WITH BACKGROUND IMAGES
   ========================================================================== */

/* Base: card con imagen de fondo y overlay */
.service-card-image {
  position: relative;
  background: none !important;
  border: none !important;
  overflow: hidden;
  color: var(--color-light);
  min-height: 340px;
  isolation: isolate;
}

/* Imagen de fondo */
.service-card-image::before {
  content: '';
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  z-index: 0;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Overlay oscuro degradado para legibilidad del texto */
.service-card-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.50) 0%,
    rgba(0, 0, 0, 0.75) 100%
  );
  z-index: 1;
}

.service-card-image:hover::before {
  transform: scale(1.08);
}

/* Elevar el contenido sobre el overlay */
.service-card-image > * {
  position: relative;
  z-index: 2;
}

/* Texto blanco para legibilidad sobre overlay oscuro */
.service-card-image .service-title {
  color: var(--color-light);
}

.service-card-image .service-desc {
  color: rgba(255, 255, 255, 0.85);
}

.service-card-image .service-icon {
  background-color: rgba(255, 255, 255, 0.15);
  color: var(--color-light);
}

.service-card-image .service-tag {
  background-color: rgba(255, 255, 255, 0.15);
  color: var(--color-light);
}

.service-card-image.service-card-link::after {
  color: rgba(255, 255, 255, 0.7);
}

.service-card-image.service-card-link:hover::after {
  color: var(--color-light);
}

/* --- Imágenes específicas por tarjeta --- */

/* Escolares — usar imagen del hero que sea de ámbito escolar */
.service-card-escolar::before {
  background-image: url('img/hero/GI9C3144.jpg');
}

/* Wedding — imagen de plan-recuerdo */
.service-card-wedding::before {
  background-image: url('img/wedding/plan-recuerdo.jpg');
}

/* Social Media — imagen del hero con estilo moderno/digital */
.service-card-social::before {
  background-image: url('img/hero/5983f1442f086c32ec95da35b7cead0c.jpg');
}

/* Hover sutil: intensificar overlay */
.service-card-image:hover::after {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.60) 0%,
    rgba(0, 0, 0, 0.80) 100%
  );
}

/* Responsive: altura mínima reducida en móvil */
@media (max-width: 768px) {
  .service-card-image {
    min-height: 280px;
  }
}
```

### 5. Nota sobre imágenes

- **Escolares** (`GI9C3144.jpg`): ⚠️ Posible imagen de graduación/escolar. Si no es la correcta, reemplazar por otra del directorio `img/hero/`.
- **Wedding** (`plan-recuerdo.jpg`): Imagen de boda existente en `img/wedding/`.
- **Social Media** (`5983f1442f086c32ec95da35b7cead0c.jpg`): Otra imagen del hero. Cambiable si se desea.

---

## Archivos a Modificar

| Archivo | Cambios |
|---------|---------|
| [`index.html`](index.html:171-244) | Modificar las 3 tarjetas de servicios (textos, clases, íconos SVG) |
| [`index.css`](index.css:797) | Agregar bloque `.service-card-image` y variantes específicas |

---

## Diagrama Visual del Resultado

```
┌────────────────────────────────────────────────────────────────┐
│                    NUESTROS SERVICIOS                          │
├─────────────────┬─────────────────┬───────────────────────────┤
│  [IMG ESCOLAR]  │  [IMG WEDDING]  │  [IMG SOCIAL]            │
│  ░░░░░░░░░░░░   │  ░░░░░░░░░░░░   │  ░░░░░░░░░░░░            │
│  ░░🎓░░░░░░░░░  │  ░░❤️░░░░░░░░  │  ░░📈░░░░░░░░░          │
│  ░░░░░░░░░░░░   │  ░░░░░░░░░░░░   │  ░░░░░░░░░░░░            │
│  Monti           │  Monti          │  Monti Social Media      │
│  Fotografías     │  Wedding        │                          │
│  Escolares       │                 │  Estrategias             │
│                  │  Fotografía y   │  integrales de           │
│  Cobertura       │  video          │  posicionamiento         │
│  fotográfica     │  cinematográfico│  digital...              │
│  premium...      │  para bodas...  │                          │
│                  │                 │                          │
│  [Retratos]      │  [Bodas]       │  [Content Strategy]      │
│  [Graduaciones]  │  [Recepción]   │  [Growth]                │
│  [Eventos Esc.]  │  [Video]       │  [Branding Digital]      │
│              →   │            →   │                     →    │
└─────────────────┴─────────────────┴───────────────────────────┘

  Todas las tarjetas con:
  - Imagen de fondo representativa de cada servicio
  - Overlay degradado oscuro (50% → 75%) para legibilidad
  - Texto blanco en todos los elementos
  - Íconos SVG alusivos: 🎓 gorra graduación / ❤️ corazón / 📈 trending up
  - Efecto hover: zoom de imagen + intensificación del overlay
```

---

## Consideraciones Técnicas

1. **Overlay vs opacar**: El degradado `rgba(0,0,0,0.50) → rgba(0,0,0,0.75)` permite ver la imagen de fondo (no la opaca completamente) pero el texto blanco es perfectamente legible.

2. **Pseudo-elementos**: Se usan `::before` (imagen) y `::after` (overlay) para no agregar markup extra al HTML.

3. **`isolation: isolate`**: Crea un nuevo stacking context, asegurando que los pseudo-elementos no interfieran con otros elementos de la página.

4. **Íconos SVG nuevos**:
   - **Escolares**: Gorro de graduación — representa el ámbito educativo
   - **Wedding**: Corazón — representa amor/boda
   - **Social Media**: 📈 Trending Up (gráfico ascendente) — representa crecimiento/marketing digital

5. **Textos nuevos**:
   - **Wedding**: `Monti Wedding` + descripción de bodas + tags `Bodas`, `Recepción`, `Video`
   - **Monti Social Media**: solo cambia el título (descripción y tags iguales)

---

## Tareas de Implementación (Orden de Ejecución)

1. **CSS**: Agregar el bloque `.service-card-image` y variantes en `index.css` (después de línea ~977, antes del footer)
2. **HTML Card 1 (Escolares)**: Agregar clases `service-card-image service-card-escolar`, reemplazar ícono SVG por 🎓 gorro de graduación
3. **HTML Card 2 (Estudio → Wedding)**: Eliminar `service-card-dark`, agregar `service-card-image service-card-wedding`, cambiar título/descripción/tags, reemplazar ícono por ❤️ corazón
4. **HTML Card 3 (Social Media → Monti Social Media)**: Eliminar `service-card-dark`, agregar `service-card-image service-card-social`, cambiar título, reemplazar ícono por 📈 trending up
5. **Verificar**: Responsive, legibilidad del texto, hover effects, enlaces correctos
