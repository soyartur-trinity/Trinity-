# 📘 STYLE GUIDE - CONSTELACIÓN TRINITY

## 🎯 Visión General del Proyecto

**Constelación Trinity**: 13 libros interconectados en HTML interactivo
**Autor**: Psicólogo clínico, Psicología Cognitiva 3ra generación, Filosofía Budista
**Objetivo**: Crear experiencias inmersivas de transformación consciencial

-----

## 🎨 PALETAS DE COLOR POR LIBRO

### Libro 1-5: [Completar según necesidad]

### Libro 6: El Vacío Fértil

```css
/* Colores principales */
--primary-purple: #c084fc;
--secondary-purple: #a855f7;
--accent-indigo: #6366f1;
--accent-blue: #60a5fa;
--accent-gold: #e2b72f;

/* Fondos */
background: radial-gradient(ellipse at center, #0f0c29 0%, #302b63 50%, #24243e 100%);

/* Transparencias */
background: rgba(255, 255, 255, 0.03);
backdrop-filter: blur(10px);
```

### Libro 7: La Muerte como Maestra

#### Nodo 1-2: Violeta místico

```css
--primary: #8b5cf6;
--secondary: #7c3aed;
--accent: #a78bfa;
background: linear-gradient(135deg, #1a0033 0%, #2d1b4e 50%, #1f0f3d 100%);
```

#### Nodo 3: Verde sanador

```css
--primary: #10b981;
--secondary: #059669;
--accent: #34d399;
background: linear-gradient(135deg, #0a1f1a 0%, #1a3e2e 50%, #0f2e1e 100%);
```

#### Nodo 4: Azul tecnológico

```css
--primary: #3b82f6;
--secondary: #2563eb;
--accent: #60a5fa;
background: linear-gradient(135deg, #0a1a2e 0%, #1a2e4e 50%, #0f1e3d 100%);
```

#### Nodo 5: Rojo transformador

```css
--primary: #ef4444;
--secondary: #dc2626;
--accent: #f87171;
background: linear-gradient(135deg, #2e0a0a 0%, #4e1a1a 50%, #3d0f0f 100%);
```

#### Nodo 6: Dorado cuántico

```css
--primary: #ffd700;
--secondary: #ffa500;
--accent: #ffed4e;
background: linear-gradient(135deg, #0a0a1a 0%, #1a1a3e 50%, #0f0f2e 100%);
```

#### Nodo 7: Verde terrestre/cósmico

```css
--primary: #4caf50;
--secondary: #66bb6a;
--accent: #81c784;
background: linear-gradient(135deg, #0a1a0a 0%, #1a2e3e 50%, #0f1e2e 100%);
```

-----

## 🏗️ ESTRUCTURA HTML BASE

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nodo X: [Título] | [Nombre del Libro]</title>
    <style>
        /* CSS completo aquí */
    </style>
</head>
<body>
    <canvas id="[tipo]-canvas"></canvas>
    
    <div class="container">
        <!-- HEADER -->
        <div class="header">
            <div class="book-title">📖 Libro X: [Nombre]</div>
            <div class="nodo-number">[Emoji] NODO X [Emoji]</div>
            <h1 class="nodo-title">[TÍTULO EN MAYÚSCULAS]</h1>
            <div class="quote">
                "[Cita inspiradora]"
            </div>
        </div>

        <!-- SECCIONES -->
        <div class="section">
            <h2>[Título de Sección]</h2>
            <!-- Contenido -->
        </div>

        <!-- NAVEGACIÓN -->
        <div class="navegacion">
            <a href="nodo_X.html" class="nav-button">← Nodo X</a>
            <a href="nodo_X.html" class="nav-button">Nodo X →</a>
        </div>
    </div>

    <script>
        /* JavaScript para canvas animado */
    </script>
</body>
</html>
```

-----

## 🎭 COMPONENTES REUTILIZABLES

### 1. CARDS PRINCIPALES

#### Card Estándar

```css
.card-standard {
    background: linear-gradient(135deg, rgba(VAR1, 0.15) 0%, rgba(VAR2, 0.1) 100%);
    padding: 30px;
    margin: 25px 0;
    border-radius: 15px;
    border-left: 5px solid VAR-COLOR;
    transition: all 0.3s ease;
}

.card-standard:hover {
    transform: translateX(10px);
    box-shadow: 0 5px 25px rgba(VAR-COLOR, 0.3);
}
```

#### Revelación/Práctica Card

```css
.practice-card {
    background: linear-gradient(135deg, rgba(VAR1, 0.2) 0%, rgba(VAR2, 0.15) 100%);
    padding: 35px;
    margin: 30px 0;
    border-radius: 18px;
    border: 2px solid rgba(VAR-COLOR, 0.4);
    box-shadow: 0 8px 32px rgba(VAR-COLOR, 0.2);
}
```

### 2. BOXES ESPECIALES

#### Testimonio

```css
.testimonio {
    background: rgba(COLOR, 0.15);
    padding: 25px;
    margin: 20px 0;
    border-radius: 12px;
    border-left: 4px solid COLOR;
    font-style: italic;
}

.testimonio-autor {
    text-align: right;
    color: COLOR;
    font-weight: bold;
    margin-top: 10px;
    font-style: normal;
}
```

#### Conexión con Otros Libros

```css
.conexion-box {
    background: rgba(33, 150, 243, 0.12);
    padding: 25px;
    margin: 20px 0;
    border-radius: 12px;
    border-left: 4px solid #64b5f6;
    font-style: italic;
}
```

#### Advertencia/Invitación

```css
.advertencia {
    background: linear-gradient(135deg, rgba(251, 191, 36, 0.12) 0%, rgba(245, 158, 11, 0.08) 100%);
    padding: 25px;
    margin: 20px 0;
    border-radius: 12px;
    border-left: 5px solid #fbbf24;
}
```

### 3. GRIDS RESPONSIVE

```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin: 30px 0;
}

.grid-item {
    background: linear-gradient(135deg, rgba(VAR1, 0.15) 0%, rgba(VAR2, 0.08) 100%);
    padding: 20px;
    border-radius: 12px;
    border-left: 4px solid VAR-COLOR;
    transition: all 0.3s ease;
}

.grid-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(VAR-COLOR, 0.3);
}
```

### 4. LISTAS ESTILIZADAS

```css
.lista-item {
    background: linear-gradient(135deg, rgba(VAR1, 0.12) 0%, rgba(VAR2, 0.08) 100%);
    padding: 15px 20px;
    margin: 12px 0;
    border-radius: 10px;
    border-left: 4px solid VAR-COLOR;
}
```

### 5. MEDITACIÓN/PRÁCTICA BOX

```css
.meditacion-box {
    background: linear-gradient(135deg, rgba(VAR1, 0.2) 0%, rgba(10, 10, 26, 0.5) 100%);
    padding: 40px;
    margin: 40px 0;
    border-radius: 20px;
    border: 2px solid rgba(VAR-COLOR, 0.5);
    text-align: center;
}
```

### 6. EJERCICIO CONTEMPLATIVO

```css
.ejercicio-box {
    background: rgba(VAR-COLOR, 0.08);
    padding: 30px;
    margin: 30px 0;
    border-radius: 15px;
    border: 2px solid rgba(VAR-COLOR, 0.3);
}

.ejercicio-titulo {
    font-size: 1.4rem;
    color: VAR-COLOR;
    margin-bottom: 20px;
    text-align: center;
    font-weight: bold;
}
```

-----

## 🎬 ANIMACIONES CANVAS

### Tipo 1: Partículas Flotantes

```javascript
class Particula {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(HUE, 70%, 60%, 0.6)`;
        ctx.fill();
    }
}
```

### Tipo 2: Ondas Expansivas

```javascript
class Onda {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = 0;
        this.maxRadius = Math.random() * 200 + 100;
        this.speed = Math.random() * 0.5 + 0.3;
        this.opacity = Math.random() * 0.5 + 0.3;
    }
    
    update() {
        this.radius += this.speed;
        this.opacity -= 0.002;
        if (this.radius > this.maxRadius || this.opacity <= 0) {
            this.reset();
        }
    }
    
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(HUE, 100%, 60%, ${this.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
    }
}
```

### Tipo 3: Red Neuronal/Micelial

```javascript
class Nodo {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
}

function conectarNodos() {
    const maxDistance = 150;
    for (let i = 0; i < nodos.length; i++) {
        for (let j = i + 1; j < nodos.length; j++) {
            const dx = nodos[i].x - nodos[j].x;
            const dy = nodos[i].y - nodos[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < maxDistance) {
                const opacity = (1 - distance / maxDistance) * 0.4;
                ctx.beginPath();
                ctx.moveTo(nodos[i].x, nodos[i].y);
                ctx.lineTo(nodos[j].x, nodos[j].y);
                ctx.strokeStyle = `hsla(HUE, 70%, 60%, ${opacity})`;
                ctx.stroke();
            }
        }
    }
}
```

### Tipo 4: Portales Dimensionales (Avanzado)

```javascript
class Portal {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = 0;
        this.maxRadius = Math.random() * 80 + 60;
        this.growing = true;
        this.rotation = 0;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.opacity = 0;
        this.colorPhase = Math.random() * Math.PI * 2;
    }
    
    update() {
        this.rotation += this.rotationSpeed;
        this.colorPhase += 0.01;
        
        if (this.growing) {
            this.radius += 0.5;
            this.opacity = Math.min(this.opacity + 0.01, 0.3);
            if (this.radius >= this.maxRadius) this.growing = false;
        } else {
            this.radius -= 0.25;
            this.opacity = Math.max(this.opacity - 0.005, 0);
            if (this.radius <= 0) this.reset();
        }
    }
    
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        // Círculos concéntricos
        for (let i = 3; i > 0; i--) {
            const r = this.radius * (i / 3);
            const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, r);
            gradient.addColorStop(0, `rgba(COLOR1, ${this.opacity * 0.3})`);
            gradient.addColorStop(1, `rgba(COLOR2, 0)`);
            
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
        }
        
        ctx.restore();
    }
}
```

-----

## 🎨 EFECTOS VISUALES AVANZADOS

### Bordes Animados con Gradiente

```css
.elemento {
    border: 2px solid;
    border-image: linear-gradient(135deg, #c084fc 0%, #60a5fa 50%, #e2b72f 100%) 1;
    animation: borderGlow 4s ease-in-out infinite;
}

@keyframes borderGlow {
    0%, 100% { box-shadow: 0 0 40px rgba(COLOR, 0.2); }
    50% { box-shadow: 0 0 60px rgba(COLOR, 0.4); }
}
```

### Shimmer en Texto

```css
.text-shimmer {
    background: linear-gradient(135deg, COLOR1 0%, COLOR2 50%, COLOR3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
    0%, 100% { filter: brightness(1); }
    50% { filter: brightness(1.3); }
}
```

### Transparencias con Blur

```css
.glass-effect {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(COLOR, 0.15);
}
```

### Pulse Animation

```css
@keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.05); opacity: 0.9; }
}
```

-----

## 📱 RESPONSIVE DESIGN

```css
@media (max-width: 768px) {
    .nodo-number {
        font-size: 2.5rem;
    }
    
    .nodo-title {
        font-size: 2rem;
    }
    
    h2 {
        font-size: 1.7rem;
    }
    
    .section {
        padding: 25px;
    }
    
    .grid-container {
        grid-template-columns: 1fr;
    }
    
    .navegacion {
        flex-direction: column;
    }
}
```

-----

## 🎯 TIPOGRAFÍA CONSISTENTE

```css
body {
    font-family: 'Georgia', serif;
    line-height: 1.8;
}

/* Títulos */
.book-title { font-size: 1.1-1.2rem; letter-spacing: 3-4px; }
.nodo-number { font-size: 3.5rem; }
.nodo-title { font-size: 2.8rem; }
h2 { font-size: 2.2rem; }
h3 { font-size: 1.6rem; }
h4 { font-size: 1.3rem; }

/* Cuerpo */
p { font-size: 1.05rem; text-align: justify; }
.quote { font-size: 1.15rem; font-style: italic; }

/* Elementos especiales */
strong { color: VAR-PRIMARY-COLOR; }
.highlight {
    background: linear-gradient(135deg, rgba(VAR1, 0.25) 0%, rgba(VAR2, 0.15) 100%);
    padding: 3px 10px;
    border-radius: 5px;
}
```

-----

## 🌟 ELEMENTOS MÍSTICOS

### Símbolos/Emojis de Separación

```html
<div class="simbolo-muerte">💀 ✨ 🌟</div>
<div class="portal-symbol">🌀 ∞ 🚪 ✨</div>
```

```css
.simbolo-muerte, .portal-symbol {
    text-align: center;
    font-size: 3-5rem;
    margin: 40px 0;
    animation: pulse 2s ease-in-out infinite;
}
```

### Mantras/Declaraciones

```css
.mantra, .declaracion {
    text-align: center;
    font-size: 1.3-1.4rem;
    font-style: italic;
    padding: 30-40px;
    margin: 30-40px 0;
    background: rgba(VAR-COLOR, 0.1);
    border-radius: 15px;
    border-top: 3px solid VAR-COLOR;
    border-bottom: 3px solid VAR-COLOR;
    line-height: 2;
}
```

-----

## 🔗 NAVEGACIÓN ESTÁNDAR

```html
<div class="navegacion">
    <a href="nodo_prev.html" class="nav-button">← Nodo X: Título</a>
    <a href="nodo_next.html" class="nav-button">Nodo X: Título →</a>
</div>
```

```css
.navegacion {
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
    gap: 20px;
}

.nav-button {
    padding: 15px 30px;
    background: linear-gradient(135deg, COLOR1 0%, COLOR2 100%);
    color: #ffffff;
    text-decoration: none;
    border-radius: 30px;
    font-size: 1.1rem;
    font-weight: bold;
    transition: all 0.3s ease;
}

.nav-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 20px rgba(COLOR, 0.5);
}
```

-----

## 💡 MEJORES PRÁCTICAS

### ✅ DO’s:

- Usar transparencias con `backdrop-filter: blur(10px)`
- Gradientes suaves en backgrounds
- Animaciones sutiles (2-4s duration)
- Hover effects en todos los elementos interactivos
- Canvas animado con opacidad 0.3-0.4 máximo
- Bordes de 1-2px en cards
- Border-radius consistente (10-20px)
- Emojis relevantes al tema del nodo
- Strong en conceptos clave (color primario)
- Testimonios con autor alineado a la derecha

### ❌ DON’Ts:

- Animaciones bruscas o rápidas
- Más de 3 colores principales por nodo
- Texto blanco puro (usar #e8e8e8)
- Backgrounds sólidos (siempre gradientes)
- Olvidar responsive design
- Canvas con opacidad >0.5
- Mezclar estilos de diferentes nodos
- Saturación excesiva de colores

-----

## 📊 CHECKLIST PRE-ENTREGA

- [ ] Canvas animado funcional y temático
- [ ] Paleta de colores coherente
- [ ] Header completo con título del libro, número de nodo, título y quote
- [ ] Mínimo 5 secciones con contenido sustancial
- [ ] Al menos 2 prácticas/meditaciones
- [ ] Conexiones con otros libros (boxes azules)
- [ ] Testimonios incluidos
- [ ] Navegación funcional a nodos anteriores/siguientes
- [ ] Responsive design verificado
- [ ] Smooth scroll implementado
- [ ] Sin errores de consola en JavaScript
- [ ] Todos los textos revisados ortográficamente

-----

## 🎓 FILOSOFÍA DE DISEÑO

> “Cada nodo es una experiencia inmersiva. El diseño debe servir a la transformación consciencial, no solo decorar. La belleza es funcional: guía la atención, crea espacio para la reflexión, y facilita la integración del conocimiento.”

### Principios Core:

1. **Simplicidad Elegante**: Menos es más, pero lo que hay debe brillar
1. **Coherencia Temática**: Cada elemento visual refuerza el tema conceptual
1. **Respiración Visual**: Espacios en blanco generosos
1. **Accesibilidad Emocional**: El diseño invita, no intimida
1. **Progresión Orgánica**: El lector fluye naturalmente de sección en sección

-----

## 🔮 NOTAS PARA FUTURAS EXPANSIONES

Este guide crecerá con cada nuevo libro. Elementos únicos que funcionen excepcionalmente bien deben documentarse aquí para reutilización en futuros nodos.

**Última actualización**: Nodo 7 de “El Vacío Fértil” - Portales Dimensionales implementados

-----

*“El código es poesía. El diseño es meditación. La documentación es servicio.”*

🌀 ∞ ✨
