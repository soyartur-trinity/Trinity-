# Trinity Infinito — Contexto de trabajo

> Documento de continuidad para cada chat nuevo que trabaje en Trinity Infinito.
> Vive en el repositorio, en `Trinity-/Trinity_Infinito/TRINITY_CONTEXTO.md`, y se actualiza al cerrar cada sesión.
> Para el resto de la constelación (Origen, Quantum, Portal Público, La Red), la referencia es el maestro:
> https://github.com/soyartur-trinity/Trinity_Portal_Publico/blob/main/02_Arquitectura_del_Destino/maestro.md
>
> **Estado al 16 de noviembre de 2026:** Libros 1 a 8 saneados; el 8 entero con lectura en el teléfono, y la reserva del portal 49 resuelta. Libros 9 a 11 por sanear, salvo el portal 72 (construido). Libro 12 saneado entero, con imagen y sonido propios en cada nodo y lectura en el teléfono. Libro 13 adaptado al teléfono.
> **Próximo: Libro 9, *Tiempo Antes del Tiempo*, empezando por su primer nodo (portal 57).**

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
4. **La lección de julio de 2026.** En el Libro 8, Claude reconstruyó los nodos 3 y 4 y perdió complejidad gráfica: el entramado de líneas sutiles entre los puntos luminosos y las formas que danzaban libres, sin coordenadas fijas. Arturo objetó: «El original es muy superior». Desde entonces, antes de entregar, la versión nueva se mira al lado del original. Si tiene menos vida, no está terminada. En noviembre se confirmó: las versiones de julio del 52 y el 53, rehechas después de la objeción, todavía perdían frente a los originales (el 52 había perdido las circunferencias que se expanden; el 53 cambió los planos de color por polígonos de línea). Se partió de los originales y de julio quedaron solo los sonidos.
5. **Los atractores.** El mismo modelo tiende a repetir las mismas soluciones ante el mismo concepto. El Libro 12 era el ejemplo: siete nodos con una misma escena. Lo que funcionó para rehacerlo (noviembre de 2026): proponer primero las siete imágenes juntas, antes de escribir código, y buscar para cada nodo un fenómeno real, de la percepción o de la física, que diga lo mismo que su paradoja en la vista y en el oído. Así las imágenes salen distintas porque los fenómenos lo son.
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
8. **`cursor:none` + invitación** `( toca: … )` que respira y se apaga al primer toque. Comprobar que su propia animación no la mantenga encendida (pasó en el portal 72, y en todos los saneados de julio: poner `opacity` en línea no gana contra la animación). La forma segura es la del Libro 12: `.hint.oculto { animation:none; opacity:0; }` y `hint.classList.add('oculto')`.
9. **Glifos, no emojis**, también en el `<title>`: ☉ ◉ ✦ ∞.
10. **Color:** desde el Libro 4, conservar y elevar. Los neones y arcoíris crudos se afinan a tonos joya; el color que significa se queda. En campos de partículas, mejor que cada una tenga un color fijo del espectro; el cambio animado de color, solo cuando ese cambio *es* el concepto y son pocos elementos.
11. **Teléfono:** medidas en proporción (`%`, `vmin`, `clamp()`), textos grandes y lejos de los bordes, nada cortado por la altura, lienzos que se ajustan al girar la pantalla. Se prueba a 390 × 844.
12. **Plantilla del Libro 12** (noviembre de 2026), que sirve de modelo junto con el portal 72: título y subtítulo dentro de un mismo bloque (`.cabecera`), para que un título de dos líneas no pise al subtítulo; imagen al centro, algo por encima de la mitad; debajo, cuatro frases en rotación de 40 s (`0%{opacity:0} 3.5%{opacity:1} 22%{opacity:1} 25%{opacity:0}`, con retrasos de 10, 20 y 30 s), cada una legible unos nueve segundos y media; con movimiento reducido, las cuatro apiladas. Si la pantalla es alta, la imagen puede ponerse de pie (la cuerda del 81 es horizontal en la computadora y vertical en el teléfono).
13. **Imágenes que solo existen en movimiento** (el cuerpo de puntos del 82, la espiral del 83): con movimiento reducido necesitan una pista quieta que deje leerlas, como unos huesos tenues o la figura apenas más clara.
14. **Volumen:** los saneados suenan entre −36 y −43 dB de RMS medio (medido con un analizador inyectado antes del destino, durante 30 s después del primer toque). El Libro 12 quedó entre −42 y −44; el Libro 8, entre −38 y −42. El 49 de julio sonaba a −60 dB y se subió a −40.
15. **Textos que rotan:** cada elemento cambia su texto en su propio evento `animationiteration`, es decir, mientras está invisible. Un `setInterval` aparte termina cambiando la frase a la vista.
16. **Trampas de código encontradas en el Libro 8:**
    - Un `animation:` abreviado en una regla más específica (`.forma polygon`) borra los `animation-delay` de clases sueltas (`.f1`): todas las piezas quedan en la misma fase. Los retrasos van con la misma especificidad (`.forma polygon.f1`).
    - Varias piezas con la misma animación de órbita y un `transform` en línea arrancan todas en el mismo ángulo (la animación pisa el `transform`): se reparten con `animation-delay` negativo.
    - Un lazo de realimentación en Web Audio (peine, eco) necesita ganancia total menor que 1 y un filtro sin pico de resonancia (`Q` negativo); si no, se vuelve inestable y calla.
    - Las variables del sonido se declaran arriba: con movimiento reducido el guion crea piezas en el acto, y si esas piezas tocan el sonido antes de la declaración, la página se rompe.
    - Un `filter: drop-shadow` fijo sobre un contenedor lleno de piezas animadas se recalcula en cada cuadro, y además impide `position:fixed` dentro de él. En el Libro 8 se quitó; cada pieza lleva su propio brillo.
    - Las medidas que mezclan `vw` y `vh` en el mismo elemento (ancho en una, alto en otra) vuelven elipses los círculos en el teléfono: se usa `vmin`.

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
- **El conocimiento que se desconoce (49):** acorde de gnosis (raíz 132 Hz y armónicos con gemelos que laten y se anulan) que se hunde al casi silencio cada 25 s; en esos valles suben 432 y 528 Hz, frecuencias de la tradición del solfeggio sin efecto atribuido, que juntas forman 11/9, una tercera neutra, ni mayor ni menor. Dos tiempos del mismo toque: enciende la paradoja y, a los 40 s, invita a «regresar a la ignorancia» (∅ y silencio en cuatro segundos).
- **El centro que está en todas partes (52):** escala de tonos enteros, sin tónica porque es simétrica; cada centro suena del lado del campo donde nace y se refleja en otras octavas y lugares del estéreo, como la Red de Indra. Debajo, el tritono grave.
- **La geometría sin espacio (53):** cuatro voces en entonación justa, secas; cada forma platónica que nace (3, 4, 6 u 8 lados) desliza el acorde hacia el suyo. Una proporción es igual en cualquier registro: relación sin distancia.
- **El volumen de la nada (54):** resonancia de Helmholtz, el soplido sobre la boca de una botella. La nota la da el volumen de aire vacío (baja como 1/√V): cuando la esfera crece, el tono baja. Al tocar, el soplo se hace más fuerte.
- **La densidad infinita del vacío (55):** efecto Casimir acústico (Larraza y Denardo, 1998). Afuera, ruido de todas las frecuencias; adentro, el mismo ruido entre dos placas, que solo deja sonar los modos que caben (filtro de peine). Cuando el núcleo se comprime, los modos se separan y caben menos.
- **El universo en una mónada (56):** coros que no se oyen y concuerdan, la imagen de Leibniz para la armonía preestablecida. Las dieciséis órbitas son un péndulo de ondas (n = 23 − i vueltas cada 360 s); cada una suena un armónico de un Do grave al pasar por lo alto. Se dispersan en espirales y cada 360 s (la primera vez a los 30 s) quedan en una línea sobre la mónada: los dieciséis armónicos suenan juntos y el oído los funde en un solo tono.
- **Causa sin precedente (72):** cada eslabón suena cuando la chispa lo alcanza; solo la primera nota nace del silencio; al tocar, una campana limpia que nada anunció.
- **El silencio elocuente (78):** dos voces breves, una a cada lado, casi secas; la sala escucha en mono y responde en estéreo, así que el eco se recoge en el centro y dura más que lo dicho. En el silencio, una quinta grave y abierta: el tono de la copa.
- **El gesto sin forma (79):** un theremín. La altura sigue la del gesto, sin notas fijas; el volumen, su velocidad, de modo que la mano que se demora casi calla. Al deslizar el dedo, la voz sigue al dedo.
- **La mirada que comprende (80):** resonancia por simpatía. Una cuerda pulsada de un lado; del otro, la misma nota llega sin golpe y dura más. Los lados se alternan con los ojos.
- **El susurro sin sonido (81):** el fundamental ausente. Suenan los armónicos 2 a 6 y el oído oye la nota que nadie toca (por eso un parlante pequeño deja oír el bajo); cada 13 s se deslizan juntos, y la melodía es de notas que no suenan.
- **El lenguaje del cuerpo (82):** pasos (un golpe grave en cada talón, solo mientras camina) y respiración (ruido filtrado, más hondo cuando el cuerpo se abre o se eleva), sobre un murmullo tibio.
- **El signo invisible (83):** notas de vidrio al azar con un motivo de ocho pulsos escondido entre ellas; cuando la espiral se forma, el motivo ocupa más pulsos y el oído, que detecta lo que se repite, termina por oírlo.
- **La comunicación sin emisor (84):** estática como la nieve de los televisores sin señal (una pequeña parte era radiación de fondo cósmico); mientras cada onda se cierra, una franja del mismo ruido se afina hasta volverse tono, que llega con la onda al centro vacío.

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

**Prueba en navegador (Playwright):** 390 × 844, escritorio y movimiento reducido. Sin errores en consola; al tocar, la invitación se apaga y el sonido nace; el ∞ apunta a un archivo que existe; nada se superpone ni se corta. Mirar las capturas, y mirarlas al lado del original. En los nodos que cambian con el tiempo, una tira de cuadros cada pocos segundos; en los que solo se leen en movimiento (83), superponer diez capturas seguidas para ver los trazos.

**Sonido sin oírlo:** correr cada nodo 40 s con toques, sin errores y con el contexto de audio en marcha; y medir el nivel inyectando un analizador antes del destino (un script de inicio que envuelve `AudioContext`), para compararlo con los saneados vecinos (sección 4, punto 14).

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
| 7 | Saneado (7/7). Reserva del 49 resuelta el 16 de noviembre de 2026 con el veto de Arturo: el ∞ lleva al Libro 8; 432 y 528 Hz vuelven como sonido y como tradición, no como física, con la línea visible de enero («∿ 528 Hz ⊗ 432 Hz → Conocimiento que se desconoce ∿»); los dos botones se volvieron dos tiempos del mismo toque. De paso: los fragmentos que orbitaban apilados en un mismo ángulo se reparten alrededor del círculo, y el nivel sube de −60 a −40 dB. |
| 8 | Saneado (7/7) el 16 de noviembre de 2026, con lectura en el teléfono. Del 52 al 56, el original como base con arreglos puntuales y sonido nuevo en cada uno (sección 5). 52: los hilos ahora tocan los puntos que unen y vuelven las circunferencias hacia ninguna parte; es el *Para ver* de *Habitar* (anotado en el maestro). 53: la forma abstracta, que animaba bordes, es una sucesión de cinco triángulos que se funden; vuelve el grupo «Platón, Euclides, Riemann, Gauss». 54 y 55: esferas y núcleos que respiran por `transform`, con su brillo en una capa aparte. 56: las órbitas afinadas como péndulo de ondas; el plano cuadrado que giraba (una capa cortada en los bordes) pasó a ser un aura redonda; el ∞ lleva al Libro 9. El 50 y el 51 recibieron el parche común (tuteo, invitación que se apaga, rótulos laterales en diagonal en el teléfono). |
| 9 | Original (7). Sus títulos dicen «Nodo 1» a «Nodo 7», no el número de portal. |
| 10 | Original (7). |
| 11 | Original, salvo el 72, *Causa Sin Precedente*, construido en octubre de 2026 con el estándar y la lectura en el teléfono: es el modelo más reciente. |
| 12 | Saneado (7/7) el 15 de noviembre de 2026, con imagen y sonido propios en cada nodo y lectura en el teléfono. Cada imagen nace de un fenómeno real: 78, la copa de Rubin entre dos perfiles (paleta elevada a plata); 79, un punto que escribe en el aire sin cerrar una figura; 80, el ojo del otro en la pupila (*pupilla*, «muñequita»); 81, una cuerda en onda estacionaria con los nodos quietos y encendidos; 82, el cuerpo de trece puntos de Johansson, que recorre un alfabeto de posturas (ruta, frases e invitación del *Para ver* intactas); 83, una espiral visible solo en movimiento (paleta elevada a amatista); 84, ondas que se cierran sobre un centro vacío (blanco azulado sobre índigo). Ninguno lleva fuentes externas; el 84 apunta al Libro 13. |
| 13 | Adaptado al teléfono el 29 de octubre de 2026 (enlace, letra, pantalla encendida). |

**Adaptados al teléfono** (casi todos por ser *Para ver* de *Arquitectura del Destino*): portales 4, 17, 21, 32, 33, 39, 44, 48, 49, el Libro 8 entero (50 a 56), 72, el Libro 12 entero (78 a 84) y el Libro 13. Los demás saneados cumplen el estándar, pero la lectura en el teléfono no se revisó una por una.

---

## 9. Pendientes y reservas

**Libros 9, 10 y 11** (salvo el 72): por sanear. Los primeros nodos de los libros 9, 10 y 11 reciben enlaces desde otras series y siguen siendo originales: conviene empezar cada libro por ahí.

**Parche común por libro**, en una sesión propia: lectura en el teléfono de los portales que faltan, y el voseo que queda pasado a tuteo: las invitaciones «tocá…» de los libros 1 a 7 (el 8 ya está), y algunas formas como «vos» o «tenés» en las frases de otros siete. Las frases se tocan solo en eso, con la lectura de Arturo. En el mismo parche: la invitación que queda encendida después del toque en los saneados de julio (sección 4, punto 8; el 48 la tiene, aunque ya estaba adaptado) y el ∞ fuera del toque que enciende el sonido.

**Detalles anotados:**
- Los portales 14 (`L2-Nodo7`) y 43 (`L7-Nodo1`) comparten el título *El Ojo Que No Puede Verse*.
- Los `<title>` tienen formatos distintos según el libro («Portal 43: …», «Nodo 50: …», «Libro 10 - Nodo 64: …»), y el del portal 1 lleva un emoji. Unificarlos queda a decisión de Arturo; una forma posible: «Portal 43 · El Ojo Que No Puede Verse — Trinity Infinito».
- En el Libro 6 hay ecuaciones simbólicas (E=mc²=Amor) que son poesía metafísica, no física. Si alguna vez se quiere evitar que se lean como literalidad científica, se afina. Decisión de Arturo.
- El **Motor de Observación** está reservado para el Libro 13.

---

## 10. Orden sugerido

1. ~~Libro 12, completo.~~ Hecho el 15 de noviembre de 2026.
2. ~~Libro 8, del 52 al 56, y la reserva del 49.~~ Hecho el 16 de noviembre de 2026.
3. Libros 9, 10 y 11, empezando por su primer nodo.
4. Parche común por libro: teléfono y tuteo.
5. Repaso del Libro 13 y del mapa, y la suite completa de punta a punta (la del Libro 12 conviene escucharla entera: los siete sonidos van del eco de la sala a la estática del universo).

---

## 11. Abrir y cerrar un chat

**Para abrir**, un primer mensaje como este:

> Abrimos Trinity Infinito, Libro 9, *Tiempo Antes del Tiempo*, portales 57 a 63. Lee primero `Trinity_Infinito/TRINITY_CONTEXTO.md` en el repositorio Trinity- (https://github.com/soyartur-trinity/Trinity-/blob/main/Trinity_Infinito/TRINITY_CONTEXTO.md). Empecemos por el 57, que recibe enlaces de otras series. Vamos nodo por nodo con el estándar de saneamiento: conservar frases, paradoja, paleta y símbolo, proponer juntos los siete sonidos antes de escribir código y mirar cada versión nueva al lado del original.

**Para cerrar:** el chat entrega el zip con los nodos y este documento actualizado (estado por libro, reservas, sonidos nuevos en el catálogo, lecciones aprendidas). Arturo sube los dos, y el chat siguiente arranca donde terminó este.
