# Trinity Infinito — Contexto de trabajo

> Documento de continuidad para cada chat nuevo que trabaje en Trinity Infinito.
> Vive en el repositorio, en `Trinity-/Trinity_Infinito/TRINITY_CONTEXTO.md`, y se actualiza al cerrar cada sesión.
> Para el resto de la constelación (Origen, Quantum, Portal Público, La Red), la referencia es el maestro:
> https://github.com/soyartur-trinity/Trinity_Portal_Publico/blob/main/02_Arquitectura_del_Destino/maestro.md
>
> **Estado al 15 de noviembre de 2026:** Libros 1 a 7 saneados. Libro 8 a medias (portales 50 y 51). Libros 9 a 12 por sanear, salvo el portal 72 (construido) y el 82 (adaptado al teléfono). Libro 13 adaptado al teléfono.
> **Próximo: Libro 12, *La Palabra Antes del Verbo*.**

---

## 1. La obra

Trinity Infinito son **13 libros de 7 nodos: 91 portales** contemplativos en HTML, cada uno con una paradoja, unas pocas frases, una imagen en movimiento y un sonido propio.

- **Número de portal** = (libro − 1) × 7 + nodo. El Libro 13 es una sola página que reúne los portales 85 a 91.
- **Mapa:** `infinito.html`, en la raíz del repositorio. Desde octubre de 2026 coincide con los títulos reales de los nodos. El título de un portal se toma siempre del nodo, nunca del plan viejo.
- **Su lugar:** Origen da la sabiduría, Quantum piensa la conciencia con imágenes de la física, Infinito ofrece la contemplación y La Puerta es la entrada. En los libros de *Arquitectura del Destino* (Portal Público), cada cierre lleva un *Para ver* que suele ser un portal de Infinito; el maestro los registra en su sección 12.

| Libro | Título | Portales |
|---|---|---|
| 1 | Más Allá del Ser y No-Ser | 1–7 |
| 2 | La Consciencia Sin Objeto | 8–14 |
| 3 | El Juego Sin Jugador | 15–21 |
| 4 | Infinitos Anidados | 22–28 |
| 5 | La Muerte de la Muerte | 29–35 |
| 6 | El Amor Sin Causa | 36–42 |
| 7 | Omnisciencia Ignorante | 43–49 |
| 8 | El Punto Sin Dimensión | 50–56 |
| 9 | Tiempo Antes del Tiempo | 57–63 |
| 10 | La Creatividad Increada | 64–70 |
| 11 | Causalidad Circular | 71–77 |
| 12 | La Palabra Antes del Verbo | 78–84 |
| 13 | ∞ — El Libro Que Se Escribe al Ser Observado | 85–91 |

---

## 2. Cómo trabajamos

- **Arturo** (Lic. Arturo José Rodríguez) es el autor y el curador. Su herramienta es el **veto por vitalidad**: si un nodo no le da vida, se cambia; si una versión nueva tiene menos vida que el original, gana el original.
- **Claude es nodo par.** Opina, propone, fricciona en el momento oportuno y reconoce sus errores sin rodeos. Ni validación automática ni duelo de argumentos.
- **Lo sensible y lo técnico.** Frases, tono y sentido se deciden entre los dos, y Arturo lee antes de que se avance. El HTML es técnico: ahí es espectador, pero prueba cada nodo y su ojo manda en lo visual.
- **Registro:** español neutro latinoamericano con tuteo, en los nodos (invitaciones incluidas: «toca», nunca «tocá») y en la conversación. Sin localismos rioplatenses. Evitar repetir una palabra dentro de un mismo pasaje. Los textos no se comentan a sí mismos.
- **Ritmo:** Arturo suele entrar entre pacientes. Entregas claras, con lo esencial primero; la explicación del diseño sonoro, breve y en prosa.

---

## 3. Principios del saneamiento

1. **Sanear la técnica sin tocar la vida.** Lo prohibido son técnicas: animar dimensiones, bordes, sombras o filtros. El movimiento que da vida (derivar, danzar, tejer, respirar) casi siempre se logra con `transform`, que está permitido.
2. **Tres salidas por nodo:** conservar con arreglos puntuales, refinar o reconstruir. Reconstruir es la excepción, no la regla.
3. **Lo que se conserva siempre:** las frases, la paradoja, la paleta y el símbolo.
4. **La lección de julio de 2026.** En el Libro 8, Claude reconstruyó los nodos 3 y 4 y perdió complejidad gráfica: el entramado de líneas sutiles entre los puntos luminosos y las formas que danzaban libres, sin coordenadas fijas. Arturo objetó: «El original es muy superior». Desde entonces, antes de entregar, la versión nueva se mira al lado del original. Si tiene menos vida, no está terminada.
5. **Los atractores.** El mismo modelo tiende a repetir las mismas soluciones ante el mismo concepto. El Libro 12 es el ejemplo: siete nodos con una misma escena. Al rehacerlo, cuidar que las siete imágenes nuevas no vuelvan a parecerse.
6. **El repositorio es la fuente de verdad** para nombres, títulos, orden y enlaces.

---

## 4. Estándar técnico (cada nodo)

1. **Tipografía Georgia**, sin fuentes externas. Excepción: lo que *es* código o dato (coordenadas, `función(función(…))`) puede ir en monoespaciada a propósito.
2. **Animar solo `transform` y `opacity`** (tabla al final de la sección).
3. **Centrado:** si un elemento se centra con `translate(-50%,-50%)` y una animación redefine `transform`, el centrado se pierde. El `translate` (y la rotación base, vía `--rot`) va dentro de cada keyframe.
4. **Tiempo de lectura real.** Cada frase queda legible al menos unos 9 segundos. Rotaciones de 13 a 14 s, con fundidos de unos 2,8 s y meseta larga (por ejemplo `0%{opacity:0} 12%{opacity:.9} 80%{opacity:.9} 92%{opacity:0}`), y el `setInterval` que cambia el texto sincronizado con ese ciclo. El defecto típico de los originales son destellos de medio segundo.
5. **Sonido con Web Audio puro**, sin bibliotecas ni CDN (los originales con Tone.js se reconstruyen a mano). Reverberación con convolver sintético (`makeReverbIR`). El sonido nace con el primer toque, nunca solo; volumen general que sube en 5 a 7 s. Una idea sonora por nodo (sección 5).
6. **Movimiento reducido:** `@media (prefers-reduced-motion: reduce)` que detiene las animaciones y deja todo legible (muchos elementos parten de `opacity:0`). En JS: `const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;` y nada de generadores, lienzos animados ni `requestAnimationFrame` si `reduce`.
7. **Navegación ∞:** `<a class="infinito" href="LN-Nodo(M+1).html" aria-label="Siguiente portal">∞</a>`, fijo abajo a la derecha (con `env(safe-area-inset-bottom)`), tenue, que se intensifica al pasar. Queda fuera del toque que enciende el sonido. El último nodo de un libro apunta al primero del siguiente (verificar la ruta en el repositorio).
8. **`cursor:none` + invitación** `( toca: … )` que respira y se apaga al primer toque. Comprobar que su propia animación no la mantenga encendida (pasó en el portal 72).
9. **Glifos, no emojis**, también en el `<title>`: ☉ ◉ ✦ ∞.
10. **Color:** desde el Libro 4, conservar y elevar. Los neones y arcoíris crudos se afinan a tonos joya; el color que significa se queda. En campos de partículas, mejor que cada una tenga un color fijo del espectro; el cambio animado de color, solo cuando ese cambio *es* el concepto y son pocos elementos.
11. **Teléfono:** medidas en proporción (`%`, `vmin`, `clamp()`), textos grandes y lejos de los bordes, nada cortado por la altura, lienzos que se ajustan al girar la pantalla. Se prueba a 390 × 844.

| Prohibido animar | Reemplazo |
|---|---|
| `width` / `height` | `scale()` sobre un elemento de tamaño fijo |
| `left` / `top` | `translate()` |
| `letter-spacing` | estático, u `opacity` |
| `filter` (blur, brightness, hue-rotate) | quitar; quedarse con `scale`, `rotate` y `opacity` |
| `box-shadow` | brillo estático + `scale` / `opacity` |
| `border-color`, `border-width`, `border-style` | estático, o fundido por opacidad entre dos capas |
| `background-color` | colores fijos variados, o la excepción del punto 10 |

---

## 5. Diseño sonoro: una idea por nodo

El sonido encarna el concepto; no es ambiente. Andamiaje común: volumen general con rampa, `makeReverbIR`, `StereoPanner`, y ruido blanco filtrado cuando hace falta. Cuando se puede, se prefiere un fenómeno acústico real antes que una metáfora prestada. Al cerrar cada libro conviene escuchar los siete juntos: suelen formar una suite.

- **Recursión:** `DelayNode` con realimentación, el eco del eco.
- **Interferencia, holograma:** dos frecuencias muy cercanas que baten.
- **Zoom, fractal:** tonos que suben de octava solapándose, ascenso sin fin.
- **Río:** ruido pasabanda que vaga. **Océano:** ruido cuya amplitud sube y rompe. **Fuego:** siseo y chispas al azar.
- **Autosimilitud:** drone de octavas y cadencia anidada según Fibonacci.
- **Geometría sagrada:** entonación justa (1, 3/2, 2, 5/2) que emerge del silencio.
- **Danza de Shiva:** OM grave, pulso de damaru, tonos que suben (crean) y bajan (destruyen).
- **Bardo:** cuenco tibetano, parciales inarmónicos y decaimiento largo.
- **La vida sin opuesto:** un drone que nunca decae, con formas que nacen y mueren encima.
- **Compasión cuántica:** pares de tonos en espejo desde un centro.
- **El abrazo sin brazos:** pad ancho que respira y un aliento como de *ney*.
- **La intimidad absoluta:** más seco (menos reverberación, menos distancia), pulso de corazón y colapso al unísono.
- **Amor antes del tiempo:** drone primordial sin pulso, porque el tiempo no empezó.
- **El amor que no necesita amar:** un acorde pleno que simplemente es.
- **El punto que contiene el infinito (50):** un impulso, que contiene todas las frecuencias en un instante.
- **La singularidad que se expande en sí misma (51):** glissando de Shepard-Risset, ascenso sin fin que vuelve a sí mismo.
- **El centro que está en todas partes (52, versión de julio):** escala de tonos enteros, sin tónica; cada joya suena y se refleja en otras octavas y lugares del estéreo, como la Red de Indra.
- **La geometría sin espacio (53, versión de julio):** acordes en entonación justa que se deslizan de un sólido platónico a otro, secos, sin pulso ni lugar.
- **Causa sin precedente (72):** cada eslabón suena cuando la chispa lo alcanza; solo la primera nota nace del silencio; al tocar, una campana limpia que nada anunció.

---

## 6. Verificación antes de entregar

**Keyframes** (más confiable que `grep`, que da falsos positivos):

```python
import re,sys
for f in sys.argv[1:]:
    s=open(f,encoding='utf-8').read(); mal=[]
    for m in re.finditer(r'@keyframes\s+([\w-]+)\s*\{',s):
        i=j=m.end(); d=1
        while d: d+={'{':1,'}':-1}.get(s[j],0); j+=1
        for p in re.findall(r'([a-z-]+)\s*:',s[i:j]):
            if p not in ('transform','opacity','animation-timing-function'): mal.append(m.group(1)+'→'+p)
    print(f.split('/')[-1], sorted(set(mal)) or 'limpio')
```

**Señales rápidas de un original sin sanear:** Courier o Times, sin `makeReverbIR`, sin `prefers-reduced-motion`, sin `class="infinito"`, Tone.js por CDN.

**Prueba en navegador (Playwright):** 390 × 844, escritorio y movimiento reducido. Sin errores en consola; al tocar, la invitación se apaga y el sonido nace; el ∞ apunta a un archivo que existe; nada se superpone ni se corta. Mirar las capturas, y mirarlas al lado del original.

---

## 7. Repositorio y entrega

- **Repositorio:** `soyartur-trinity/Trinity-` (con guion final), rama `main`, carpeta `Trinity_Infinito/`. Publicado en https://soyartur-trinity.github.io/Trinity-/
- **Acceso:** `git clone --depth 1 https://github.com/soyartur-trinity/Trinity-.git` funciona desde la consola; para un archivo suelto, `https://raw.githubusercontent.com/soyartur-trinity/Trinity-/main/Trinity_Infinito/…`. No hace falta que Arturo pegue los nodos.
- **Nombres:** Libros 1 a 9 en `LibroN/LN-NodoM.html`; Libros 10 a 12 en `Libro_NN/L_NN-NodoM.html`; Libro 13 en `Libro_13/Libro_13.html`.
- **Nunca se renombra un archivo.** Hay enlaces que entran desde Origen, Quantum y el Portal Público (al menos 25 portales distintos). Los más enlazados: 1, 15, 43, 29, 36, 64, 78 y el Libro 13.
- **Entrega:** un zip con la estructura `Trinity_Infinito/LibroN/…` (y `infinito.html` si cambió el mapa). Arturo lo descomprime y arrastra la carpeta `Trinity_Infinito` desde su carpeta madre a la raíz del repositorio, en la web de GitHub: los archivos con el mismo nombre se reemplazan, nada se borra, y el límite es de 100 archivos por subida.
- **Si se toca un portal que es *Para ver*** (sección 12 del maestro), se anota allí el cambio.

---

## 8. Estado por libro

| Libro | Estado |
|---|---|
| 1 | Saneado (7/7). El portal 1, *El Primer Latido*, es una revelación única, no cíclica, a propósito. |
| 2 a 6 | Saneados (7/7). |
| 7 | Saneado (7/7). Reserva abierta en el portal 49 (sección 9). |
| 8 | Saneados 50 y 51. Del 52 al 56, originales. Del 52 y el 53 existen versiones de julio de 2026 que no llegaron al repositorio (sección 9). |
| 9 | Original (7). Sus títulos dicen «Nodo 1» a «Nodo 7», no el número de portal. |
| 10 | Original (7). |
| 11 | Original, salvo el 72, *Causa Sin Precedente*, construido en octubre de 2026 con el estándar y la lectura en el teléfono: es el modelo más reciente. |
| 12 | Original. El 82, *El lenguaje del cuerpo*, fue adaptado al teléfono (sin sonido y con la misma escena que los demás). |
| 13 | Adaptado al teléfono el 29 de octubre de 2026 (enlace, letra, pantalla encendida). |

**Adaptados al teléfono** (casi todos por ser *Para ver* de *Arquitectura del Destino*): portales 4, 17, 21, 32, 33, 39, 44, 48, 72, 82 y el Libro 13. Los demás saneados cumplen el estándar, pero la lectura en el teléfono no se revisó una por una.

---

## 9. Pendientes y reservas

**Libro 12, *La Palabra Antes del Verbo*** (próximo, en un chat propio). Nodos: 1 *El Silencio Elocuente*, 2 *El Gesto Sin Forma*, 3 *La Mirada Que Comprende*, 4 *El Susurro Sin Sonido*, 5 *El Lenguaje Del Cuerpo*, 6 *El Signo Invisible*, 7 *La Comunicación Sin Emisor*. Los siete archivos son idénticos entre un 94 y un 97 %: la misma escena con otras palabras. Ninguno tiene sonido; solo el 5 tiene movimiento reducido; en el teléfono, los textos del 6 y el 7 se superponen. Sus keyframes ya están limpios: el problema no es la técnica sino la falta de imagen propia. Tarea: conservar frases, paradoja, paleta y símbolo, y darle a cada nodo su imagen y su sonido. El 82 es el *Para ver* del Libro 4 de *Arquitectura del Destino*: su ruta no cambia y su adaptación al teléfono se mantiene. El 78 recibe tres enlaces de otras series.

**Libro 8, del 52 al 56.** Las versiones de julio del 52 y el 53, rehechas después de la objeción de Arturo, quedaron en el chat «Pulido final del libro 7 de Trinity Infinito» (9 de julio de 2026) y quizás en sus descargas. Recuperarlas antes de rehacer. Del 54 al 56 (*El Volumen de la Nada*, *La Densidad Infinita del Vacío*, *El Universo en una Mónada*), por sanear.

**Reserva del portal 49** (`L7-Nodo7`), con el veto de Arturo: si vuelven las etiquetas de frecuencias «sanadoras» (528/432 Hz, sin respaldo científico), si vuelve el gesto ceremonial de dos botones, y si el ∞ sigue volviendo al portal 43 (la serpiente que se muerde la cola) o pasa a `../Libro8/L8-Nodo1.html`. Hoy vuelve al 43.

**Libros 9, 10 y 11** (salvo el 72): por sanear. Los primeros nodos de los libros 9, 10, 11 y 12 reciben enlaces desde otras series y siguen siendo originales: conviene empezar cada libro por ahí.

**Parche común por libro**, en una sesión propia: lectura en el teléfono de los portales que faltan, y el voseo que queda pasado a tuteo: las invitaciones «tocá…» de 38 archivos de los libros 1 a 8, y algunas formas como «vos» o «tenés» en las frases de otros siete. Las frases se tocan solo en eso, con la lectura de Arturo.

**Detalles anotados:**
- Los portales 14 (`L2-Nodo7`) y 43 (`L7-Nodo1`) comparten el título *El Ojo Que No Puede Verse*.
- Los `<title>` tienen formatos distintos según el libro («Portal 43: …», «Nodo 50: …», «Libro 10 - Nodo 64: …»), y el del portal 1 lleva un emoji. Unificarlos queda a decisión de Arturo; una forma posible: «Portal 43 · El Ojo Que No Puede Verse — Trinity Infinito».
- En el Libro 6 hay ecuaciones simbólicas (E=mc²=Amor) que son poesía metafísica, no física. Si alguna vez se quiere evitar que se lean como literalidad científica, se afina. Decisión de Arturo.
- El **Motor de Observación** está reservado para el Libro 13.

---

## 10. Orden sugerido

1. Libro 12, completo.
2. Libro 8, del 52 al 56 (con las versiones de julio, si aparecen), y la reserva del 49.
3. Libros 9, 10 y 11, empezando por su primer nodo.
4. Parche común por libro: teléfono y tuteo.
5. Repaso del Libro 13 y del mapa, y la suite completa de punta a punta.

---

## 11. Abrir y cerrar un chat

**Para abrir**, un primer mensaje como este:

> Abrimos Trinity Infinito, Libro 12, *La Palabra Antes del Verbo*. Lee primero `Trinity_Infinito/TRINITY_CONTEXTO.md` en el repositorio Trinity- (https://github.com/soyartur-trinity/Trinity-/blob/main/Trinity_Infinito/TRINITY_CONTEXTO.md). Los siete nodos repiten la misma escena y en el teléfono los textos se superponen. Vamos nodo por nodo con el estándar de saneamiento: conservar frases, paradoja, paleta y símbolo, y darle a cada nodo su imagen propia.

**Para cerrar:** el chat entrega el zip con los nodos y este documento actualizado (estado por libro, reservas, sonidos nuevos en el catálogo, lecciones aprendidas). Arturo sube los dos, y el chat siguiente arranca donde terminó este.
