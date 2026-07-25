# Plan: Página Wedding (monti-estudio.html)

## Objetivo

Transformar [`monti-estudio.html`](monti-estudio.html) en la página de Wedding con hero elegante, planes alternados con imágenes, y efectos visuales que transmitan un momento mágico.

---

## A. Imágenes

### Copiar desde Downloads al proyecto

```bash
cp "/Users/ferminvicente/Downloads/MONTI Photography Plans-2/Hero/1.jpg" img/wedding/hero.jpg
cp "/Users/ferminvicente/Downloads/MONTI Photography Plans-2/Plan Esencial Digital.jpg" img/wedding/plan-esencial.jpg
cp "/Users/ferminvicente/Downloads/MONTI Photography Plans-2/Plan Recuerdo Clásico.jpg" img/wedding/plan-recuerdo.jpg
cp "/Users/ferminvicente/Downloads/MONTI Photography Plans-2/Plan Experiencia 360.png" img/wedding/plan-experiencia.jpg
```

Crear directorio: `img/wedding/`

| Archivo origen | → Destino proyecto | Uso |
|---------------|-------------------|-----|
| `Hero/1.jpg` | `img/wedding/hero.jpg` | Fondo del hero |
| `Plan Esencial Digital.jpg` | `img/wedding/plan-esencial.jpg` | Imagen plan 1 |
| `Plan Recuerdo Clásico.jpg` | `img/wedding/plan-recuerdo.jpg` | Imagen plan 2 |
| `Plan Experiencia 360.png` | `img/wedding/plan-experiencia.jpg` | Imagen plan 3 |

---

## B. Hero Section

### Cambios en HTML

```html
<section class="page-hero wedding-hero" id="page-hero">
    <div class="page-hero-overlay"></div>
    <div class="page-hero-content">
        <p class="page-hero-tagline wedding-tagline">Monti Wedding</p>
        <h1 class="page-hero-title wedding-title">WEDDINGS, BEAUTIFULLY CAPTURED</h1>
        <p class="page-hero-subtitle wedding-subtitle">Documentamos cada instante con fotografía y video cinematográfico para que revivan el día más importante de sus vidas una y otra vez.</p>
    </div>
</section>
```

### Cambios en CSS (nuevas clases)

```css
/* Wedding Hero - imagen de fondo */
.wedding-hero {
  background-image: url('img/wedding/hero.jpg');
  background-size: cover;
  background-position: center;
  height: 70vh;
  min-height: 500px;
  max-height: 700px;
}

/* Tagline blanco legible */
.wedding-tagline {
  color: var(--color-light) !important;
}

/* Título blanco */
.wedding-title {
  color: var(--color-light) !important;
  font-size: var(--fs-xxl);
}

/* Subtítulo blanco */
.wedding-subtitle {
  color: var(--color-light) !important;
  font-weight: 300;
}
```

**Nota:** También actualizar meta tags:
- `<title>`: "Monti Wedding | Montipage"
- `og:title`: "Monti Wedding | Montipage"
- `description`: contenido wedding

---

## C. Sección de Planes (Layout Alternado)

### Estructura

```
[PLAN 1]  Imagen a la izquierda → Plan a la derecha  (row normal)
[PLAN 2]  Plan a la izquierda ← Imagen a la derecha  (row reverse)
[PLAN 3]  Imagen a la izquierda → Plan a la derecha  (row normal)
```

Usar `split-layout` existente con clase `reverse` para alternar.

### Nuevo CSS para tarjetas de plan (sin bordes, legibles)

```css
/* Wedding Plan Card */
.wedding-plan-card {
  background: var(--color-offwhite);
  padding: 2.5rem;
  border-radius: 0; /* sin bordes redondeados para look editorial */
}

.wedding-plan-card h3 {
  font-family: var(--font-heading);
  font-size: var(--fs-md);
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--color-black);
}

.wedding-plan-features {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

.wedding-plan-features li {
  padding: 0.4rem 0;
  color: var(--text-secondary);
  font-size: var(--fs-sm);
  border-bottom: 1px solid var(--color-gray-200);
}

.wedding-plan-price {
  font-family: var(--font-heading);
  font-size: var(--fs-lg);
  font-weight: 700;
  color: var(--color-black);
  margin-top: 1rem;
}

/* Imagen con efecto mágico */
.wedding-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--border-radius-sm);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s ease;
}

.wedding-image:hover {
  transform: scale(1.03);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}

/* Efecto shimmer sutil */
.wedding-image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius-sm);
}

.wedding-image-wrapper::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent 40%,
    rgba(255, 255, 255, 0.08) 50%,
    transparent 60%
  );
  opacity: 0;
  transition: opacity 0.6s ease;
  pointer-events: none;
}

.wedding-image-wrapper:hover::after {
  opacity: 1;
  animation: weddingShimmer 1.5s ease-in-out;
}

@keyframes weddingShimmer {
  0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
  100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
}
```

### HTML para cada plan (alternando con `reverse`)

**Plan 1: Esencial Digital** (normal — imagen izquierda, plan derecha)
```html
<div class="split-layout reveal">
    <div class="wedding-image-wrapper">
        <img src="img/wedding/plan-esencial.jpg" alt="Plan Esencial Digital" class="wedding-image" loading="lazy">
    </div>
    <div class="wedding-plan-card">
        <h3>📸 Plan Esencial Digital</h3>
        <ul class="wedding-plan-features">
            <li>Galería digital</li>
            <li>30 fotos retocadas</li>
            <li>4 horas de cobertura</li>
        </ul>
        <div class="wedding-plan-price">USD $550</div>
        <a href="https://wa.me/18097124444?text=Hola%20Monti%2C%20estoy%20interesado%20en%20el%20Plan%20Esencial%20Digital%20(USD%20%24550).%20%C2%BFqu%C3%A9%20necesitas%20para%20comenzar%20a%20trabajar%20con%20nosotros%3F"
            target="_blank" class="btn btn-primary" style="margin-top: 1.25rem;">
            Solicitar Plan
        </a>
    </div>
</div>
```

**Plan 2: Recuerdo Clásico** (reverse — plan izquierda, imagen derecha)
```html
<div class="split-layout reverse reveal">
    <div class="wedding-plan-card">
        <h3>📸 Plan Recuerdo Clásico</h3>
        <ul class="wedding-plan-features">
            <li>38 fotos digitales</li>
            <li>1 foto impresa 16×20</li>
            <li>Álbum personalizado 8×10</li>
            <li>4 horas de sesión</li>
            <li>2 locaciones</li>
        </ul>
        <div class="wedding-plan-price">USD $850</div>
        <a href="..." target="_blank" class="btn btn-primary" style="margin-top: 1.25rem;">
            Solicitar Plan
        </a>
    </div>
    <div class="wedding-image-wrapper">
        <img src="img/wedding/plan-recuerdo.jpg" alt="Plan Recuerdo Clásico" class="wedding-image" loading="lazy">
    </div>
</div>
```

**Plan 3: Experiencia 360** (normal — imagen izquierda, plan derecha)
```html
<div class="split-layout reveal">
    <div class="wedding-image-wrapper">
        <img src="img/wedding/plan-experiencia.jpg" alt="Plan Experiencia 360" class="wedding-image" loading="lazy">
    </div>
    <div class="wedding-plan-card">
        <h3>📸 Plan Experiencia 360</h3>
        <ul class="wedding-plan-features">
            <li>6 horas de cobertura (2 locaciones)</li>
            <li>50 fotos retocadas en galería digital</li>
            <li>Álbum tapa dura 8×10</li>
            <li>Cuadro enmarcado 16×20</li>
            <li>Libro de firmas</li>
            <li>Video pre-boda</li>
            <li>Video resumen (recap boda)</li>
        </ul>
        <div class="wedding-plan-price">USD $1,500</div>
        <a href="..." target="_blank" class="btn btn-primary" style="margin-top: 1.25rem;">
            Solicitar Plan
        </a>
    </div>
</div>
```

### Sección contenedora

```html
<section class="section" style="background-color: var(--color-offwhite);">
    <div class="container">
        <div class="section-header reveal">
            <h2>PLANES DE COBERTURA</h2>
            <p>Paquetes diseñados para capturar cada detalle de su día especial.</p>
        </div>

        <!-- Plan 1 -->
        <!-- Plan 2 -->
        <!-- Plan 3 -->
    </div>
</section>
```

---

## D. WhatsApp Links por Plan

| Plan | Mensaje codificado |
|------|-------------------|
| Esencial Digital | `Hola Monti, estoy interesado en el Plan Esencial Digital (USD $550). ¿qué necesitas para comenzar a trabajar con nosotros?` |
| Recuerdo Clásico | `Hola Monti, estoy interesado en el Plan Recuerdo Clásico (USD $850). ¿qué necesitas para comenzar a trabajar con nosotros?` |
| Experiencia 360 | `Hola Monti, estoy interesado en el Plan Experiencia 360 (USD $1,500). ¿qué necesitas para comenzar a trabajar con nosotros?` |

---

## E. Archivos a modificar

| Archivo | Cambio |
|---------|--------|
| `img/wedding/` | Crear carpeta + copiar 4 imágenes |
| [`monti-estudio.html`](monti-estudio.html) | Hero + planes + meta tags + remover sección antigua |
| [`index.css`](index.css) | Nuevas clases: `.wedding-hero`, `.wedding-tagline`, `.wedding-title`, `.wedding-subtitle`, `.wedding-plan-card`, `.wedding-plan-features`, `.wedding-plan-price`, `.wedding-image`, `.wedding-image-wrapper`, `@keyframes weddingShimmer` |

---

## F. Diagrama de layout

```
┌──────────────────────────────────────────┐
│              HERO SECTION                │
│         img/wedding/hero.jpg             │
│    ┌─────────────────────────────────┐   │
│    │     Monti Wedding               │   │
│    │ WEDDINGS, BEAUTIFULLY CAPTURED  │   │
│    │ Documentamos cada instante...   │   │
│    └─────────────────────────────────┘   │
├──────────────────────────────────────────┤
│         PLANES DE COBERTURA              │
├──────────────────────┬───────────────────┤
│  [IMG: esencial]     │  Plan Esencial    │
│                      │  Digital          │
│                      │  • features       │
│                      │  USD $550         │
├──────────────────────┴───────────────────┤
│  Plan Recuerdo       │  [IMG: recuerdo]  │
│  Clásico             │                   │
│  • features          │                   │
│  USD $850            │                   │
├──────────────────────┬───────────────────┤
│  [IMG: experiencia]  │  Plan Experiencia │
│                      │  360              │
│                      │  • features       │
│                      │  USD $1,500       │
├──────────────────────┴───────────────────┤
│              FOOTER                      │
└──────────────────────────────────────────┘
```

---

## G. Tareas

1. Crear carpeta `img/wedding/` y copiar 4 imágenes
2. Agregar CSS para `.wedding-hero`, `.wedding-tagline`, etc.
3. Agregar CSS para `.wedding-plan-card`, `.wedding-image-wrapper`, shimmer
4. Reemplazar hero en `monti-estudio.html`
5. Reemplazar sección de contenido por los 3 planes alternados
6. Actualizar meta tags (title, description, og)
7. Test visual en local
