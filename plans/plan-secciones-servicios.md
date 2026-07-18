# Plan: Nuevas Secciones Detalladas de Servicios

## Objetivo

Agregar 4 secciones completas debajo de la sección "Servicios" actual, manteniendo las tarjetas de servicios existentes. Cada sección representará una línea de negocio de Montipage con mayor nivel de detalle, imágenes y llamados a la acción.

## Estructura de la Página (Nuevo Orden)

```
Header (existente)
  ├── Hero (existente)
  ├── About / Angel Monti (existente)
  ├── Stats / Logros (existente)
  ├── Servicios (existente - tarjetas se mantienen)
  ├── [NUEVA] Fotografías Escolares
  ├── [NUEVA] Fotografía Estudio
  ├── [NUEVA] Productora Visual
  ├── [NUEVA] Social Media
  └── Footer / Contacto (existente)
```

## Principios de Diseño a Preservar

- **Paleta monocromática**: Blanco, negro, grises (`--color-black`, `--color-dark`, `--color-light`, `--color-gray-*`)
- **Tipografía**: Poppins (headings) + Roboto (body)
- **Animaciones**: `fadeUp`, scroll reveal con `IntersectionObserver` (clases `.reveal`, `.delay-*`)
- **Estética**: Minimalista, premium, cinematográfica
- **Responsive**: Mobile-first, grids adaptables

## Patrón de Fondos Alternados

Para crear ritmo visual entre las secciones, se alternarán fondos claros y oscuros:

| Sección | Fondo | Clase Base |
|---------|-------|------------|
| Fotografías Escolares | Claro (blanco) | `.section` |
| Fotografía Estudio | Oscuro | `.section-dark` |
| Productora Visual | Claro (blanco) | `.section` |
| Social Media | Oscuro | `.section-dark` |

## Imágenes Placeholder

Usar imágenes de placeholder de [picsum.photos](https://picsum.photos) con diferentes semillas para simular contenido visual hasta que el usuario proporcione las reales. Ejemplo:
- Escolares: `https://picsum.photos/seed/school/800/600`
- Estudio: `https://picsum.photos/seed/studio/800/600`
- Productora: `https://picsum.photos/seed/production/800/600`
- Social Media: `https://picsum.photos/seed/social/800/600`

## Estructura de Cada Nueva Sección

### 1. Fotografías Escolares (`#school-photography`)

```
section.section#school-photography
  div.container
    div.section-header (reveal)
      h2: FOTOGRAFÍAS ESCOLARES
      p: Descripción del servicio de fotografía escolar
    div.split-layout (reveal delay-100)
      div.split-image: img (placeholder)
      div.split-content
        h3: Título destacado
        ul.feature-list: Lista de servicios escolares
          - Retratos individuales
          - Fotos de grupo
          - Graduaciones
          - Eventos escolares
          - Álbumes digitales
    div.section-cta (reveal delay-200)
      a.btn.btn-outline: Solicitar cotización escolar
```

### 2. Fotografía Estudio (`#studio-photography`)

```
section.section-dark#studio-photography
  div.container
    div.section-header (reveal)
      h2: FOTOGRAFÍA ESTUDIO
      p: Descripción de servicios de estudio fotográfico
    div.split-layout.reverse (reveal delay-100)
      div.split-content
        h3: Título destacado
        ul.feature-list: Lista de servicios de estudio
          - Retratos editoriales
          - Fotografía de productos
          - Sesiones de marca personal
          - Fotos corporativas
          - Book de modelos
      div.split-image: img (placeholder)
    div.section-cta (reveal delay-200)
      a.btn.btn-light: Agendar sesión
```

### 3. Productora Visual (`#visual-production`)

```
section.section#visual-production
  div.container
    div.section-header (reveal)
      h2: PRODUCTORA VISUAL
      p: Descripción de producción audiovisual
    div.split-layout (reveal delay-100)
      div.split-image: img (placeholder)
      div.split-content
        h3: Título destacado
        ul.feature-list: Lista de servicios audiovisuales
          - Spots publicitarios
          - Videos corporativos
          - Documentales
          - Reels para redes
          - Post-producción
    div.section-cta (reveal delay-200)
      a.btn.btn-outline: Ver portafolio
```

### 4. Social Media (`#social-media`)

```
section.section-dark#social-media
  div.container
    div.section-header (reveal)
      h2: SOCIAL MEDIA
      p: Descripción de estrategia digital
    div.split-layout.reverse (reveal delay-100)
      div.split-content
        h3: Título destacado
        ul.feature-list: Lista de servicios de social media
          - Estrategia de contenido
          - Community management
          - Ads y growth
          - Branding digital
          - Analytics y reporting
      div.split-image: img (placeholder)
    div.section-cta (reveal delay-200)
      a.btn.btn-light: Solicitar propuesta digital
```

## Nuevos Estilos CSS Necesarios (en `index.css`)

Agregar al final del archivo:

### `.section-dark` - Versión oscura de section

```css
.section-dark {
  padding: 7rem 0;
  position: relative;
  overflow: hidden;
  background-color: var(--color-dark);
  color: var(--color-light);
}
```

### `.section-header` - Encabezado de cada sección

```css
.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
}
.section-header h2 { ... } /* similar a .services-header h2 */
.section-header p { ... } /* similar a .services-header p */
```

### `.split-layout` - Layout de 2 columnas (imagen + contenido)

```css
.split-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}
/* Versión reverse para alternar lado de la imagen */
.split-layout.reverse { ... }
```

### `.split-image` - Contenedor de imagen

```css
.split-image {
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
}
.split-image img { ... }
```

### `.split-content` - Contenido textual

```css
.split-content h3 { ... } /* heading de la sección */
.feature-list { ... }     /* lista de servicios */
.feature-list li { ... }
```

### `.section-cta` - Llamado a la acción

```css
.section-cta {
  text-align: center;
  margin-top: 3rem;
}
```

### Variantes para fondos oscuros

```css
.section-dark .section-header h2 { color: var(--color-light); }
.section-dark .section-header p { color: var(--color-gray-300); }
.section-dark .split-content h3 { color: var(--color-light); }
.section-dark .feature-list li { color: var(--color-gray-300); }
/* etc */
```

## Cambios en `index.html`

1. **Header/Nav**: Agregar enlaces a las 4 nuevas secciones
   ```html
   <a href="#school-photography" class="nav-link">Escolares</a>
   <a href="#studio-photography" class="nav-link">Estudio</a>
   <a href="#visual-production" class="nav-link">Productora</a>
   <a href="#social-media" class="nav-link">Social Media</a>
   ```

2. **Después de `section#services`**: Insertar las 4 nuevas secciones en orden

3. **Footer nav**: Agregar enlaces correspondientes

## Cambios en `app.js`

No se requieren cambios significativos. El `IntersectionObserver` existente para `.reveal` ya manejará automáticamente las animaciones de los nuevos elementos al hacer scroll. Solo verificar que funcione correctamente.

## Tareas de Implementación (Orden de Ejecución)

1. Agregar estilos CSS para las nuevas secciones (`.section-dark`, `.split-layout`, `.feature-list`, etc.)
2. Insertar sección "Fotografías Escolares" en HTML
3. Insertar sección "Fotografía Estudio" en HTML
4. Insertar sección "Productora Visual" en HTML
5. Insertar sección "Social Media" en HTML
6. Actualizar navegación del header con enlaces a las nuevas secciones
7. Actualizar navegación del footer con enlaces a las nuevas secciones
8. Revisar responsive design y consistencia visual
9. Probar scroll reveal animations en las nuevas secciones

## Notas Adicionales

- Usar imágenes de placeholder de picsum.photos con semillas fijas para consistencia
- Los textos son sugerencias, el usuario puede personalizarlos después
- Los iconos SVG de las tarjetas de servicios pueden reutilizarse o crearse nuevos
- Mantener la estructura semántica HTML5 para SEO
- Asegurar que los enlaces del menú móvil cierren el menú al hacer clic (ya implementado en app.js)
