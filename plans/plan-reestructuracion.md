# Plan: Reestructuración - Tarjetas en Servicios + Páginas Independientes

## Corrección del Enfoque Anterior

En lugar de secciones largas en `index.html`, la estructura correcta es:

1. **`index.html`** — Las tarjetas de servicios existentes se **reemplazan** por 4 tarjetas con los nombres correctos, cada una linkeando a una página independiente
2. **4 páginas HTML independientes** — Cada una con el diseño completo de Montipage (header, footer, estilo)
3. **Navegación** — Header y footer linkean a estas páginas

## Las 4 Tarjetas en Servicios

| Tarjeta | Nombre | Link | Fondo |
|---------|--------|------|-------|
| 1 | Monti Fotografías Escolares | `monti-escolares.html` | Claro |
| 2 | Monti Fotografia Estudio | `monti-estudio.html` | Oscuro |
| 3 | Monti Productora Visual | `monti-productora.html` | Claro |
| 4 | Social Media | `monti-social.html` | Oscuro |

## Estructura de Cada Página Independiente

Cada página (`monti-escolares.html`, `monti-estudio.html`, `monti-productora.html`, `monti-social.html`) tendrá:

```
Header (idéntico al de index.html, con nav-link active según página)
Hero pequeño / Banner de la página
Contenido detallado del servicio (split-layout con imagen + feature-list)
CTA a contacto
Footer (idéntico al de index.html)
```

## Archivos a Modificar

### 1. `index.html`
- **Reemplazar** las 3 tarjetas de servicios actuales por 4 nuevas tarjetas con los nombres correctos
- **Eliminar** las 4 secciones grandes que agregué (school-photography, studio-photography, visual-production, social-media)
- **Actualizar** navegación del header (links a las páginas .html en lugar de #anclas)
- **Actualizar** navegación del footer

### 2. `index.css`
- **Mantener** los nuevos estilos (`.section-dark`, `.split-layout`, `.feature-list`, `.section-header`) porque se reutilizarán en las páginas independientes
- **Agregar** estilo para `.service-card` como link (efecto hover que indique que es clickeable)

### 3. Crear 4 archivos HTML nuevos
- `monti-escolares.html`
- `monti-estudio.html`
- `monti-productora.html`
- `monti-social.html`

## Detalle de las Tarjetas en Servicios

Cada tarjeta debe:
- Tener el nombre exacto solicitado
- Ser un `<a>` que envuelva toda la tarjeta (toda la tarjeta es clickeable)
- Incluir icono SVG representativo
- Incluir descripción breve
- Incluir tags
- Tener efecto hover que indique navegación

## Detalle de Cada Página Independiente

Cada página tendrá:
- Mismo header con nav (el link de la página actual marcado como activo)
- Un hero/banner pequeño con el nombre del servicio
- Contenido con split-layout (imagen + lista de características)
- CTA a contacto
- Mismo footer

## Tareas

1. Reemplazar tarjetas de servicios en `index.html` con las 4 nuevas tarjetas linkeables
2. Eliminar las 4 secciones grandes de `index.html`
3. Actualizar header nav en `index.html` (links a páginas .html)
4. Actualizar footer nav en `index.html`
5. Crear `monti-escolares.html`
6. Crear `monti-estudio.html`
7. Crear `monti-productora.html`
8. Crear `monti-social.html`
9. Agregar estilo `.service-card` como link en `index.css`
10. Revisar consistencia visual
