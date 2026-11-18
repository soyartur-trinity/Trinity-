/* Umbral común de Trinity Infinito: volver, seguir y el sonido.
   Se carga en el <head> de cada portal, antes de sus propios guiones:
   así cada AudioContext que el portal cree queda a mano para silenciarlo.
   Cada portal conserva su sonido y su gesto; esto solo agrega
   «‹ anterior» abajo a la izquierda, la leyenda «siguiente» bajo el ∞
   y un parlante arriba a la derecha para encender o apagar el sonido.
   Un portal con un instrumento propio puede declarar, antes de este archivo
   o en cualquier momento, window.umbralSonido = { encender, apagar, suena }. */
(function () {
  'use strict';

  /* ── 1 · El sonido: todos los contextos del portal, a mano ── */
  var Original = window.AudioContext || window.webkitAudioContext;
  var contextos = [];
  var silencio = false;          // lo pidió quien lee, con el parlante
  var avisar = function () {};   // se reemplaza cuando existe el parlante

  if (Original) {
    var reanudar = Original.prototype.resume;
    var suspender = Original.prototype.suspend;
    var Envuelto = function () {
      var args = Array.prototype.slice.call(arguments);
      var c = new (Function.prototype.bind.apply(Original, [null].concat(args)))();
      contextos.push(c);
      if (silencio) suspender.call(c);
      c.resume = function () {
        if (silencio) return Promise.resolve();
        return reanudar.call(c);
      };
      c.addEventListener('statechange', function () { avisar(); });
      return c;
    };
    Envuelto.prototype = Original.prototype;
    window.AudioContext = Envuelto;
    if (window.webkitAudioContext) window.webkitAudioContext = Envuelto;

    window.__umbral = {
      callado: function () { return silencio; },
      sonando: function () {
        var p = window.umbralSonido;
        if (p && p.suena) return !!p.suena();
        for (var i = 0; i < contextos.length; i++) if (contextos[i].state === 'running') return true;
        return false;
      },
      callar: function () {
        silencio = true;
        var p = window.umbralSonido;
        if (p && p.apagar) p.apagar();
        contextos.forEach(function (c) { if (c.state === 'running') suspender.call(c); });
        avisar();
      },
      sonar: function () {
        silencio = false;
        contextos.forEach(function (c) { if (c.state === 'suspended') reanudar.call(c); });
        avisar();
      }
    };
  }

  /* ── 2 · Rutas: el portal anterior se deduce del nombre del archivo ── */
  function anterior() {
    var archivo = location.pathname.split('/').pop();
    var m = archivo.match(/^L_?(\d+)-Nodo(\d)\.html$/);
    if (!m) return null;
    var n = +m[1], k = +m[2];
    var ruta = function (n, k) {
      return n < 10 ? '../Libro' + n + '/L' + n + '-Nodo' + k + '.html'
                    : '../Libro_' + n + '/L_' + n + '-Nodo' + k + '.html';
    };
    if (k > 1) return ruta(n, k - 1);
    if (n > 1) return ruta(n - 1, 7);
    return '../../infinito.html';   // antes del primer portal, el mapa
  }

  /* El color del ∞ de cada portal, con un poco más de presencia */
  function presencia(color, minimo) {
    var m = color.match(/rgba?\(([^)]+)\)/);
    if (!m) return color;
    var p = m[1].split(',').map(function (x) { return parseFloat(x); });
    var a = p.length > 3 ? p[3] : 1;
    return 'rgba(' + p[0] + ',' + p[1] + ',' + p[2] + ',' + Math.max(a, minimo) + ')';
  }

  var PARLANTE = '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M4 9.5h3.2L12 5.5v13l-4.8-4H4z"/>' +
    '<path class="onda o1" d="M15.2 9.2a4 4 0 0 1 0 5.6"/>' +
    '<path class="onda o2" d="M17.6 6.8a7.4 7.4 0 0 1 0 10.4"/>' +
    '<path class="calla" d="M15.5 9.5l5 5M20.5 9.5l-5 5"/></svg>';

  /* El fondo de la raíz. El navegador del teléfono pinta la franja de sus botones con el color
     de fondo de la página; si el portal pinta su fondo solo con un degradado, ese color queda
     transparente y la franja sale blanca. Se toma el último color del degradado. */
  function fondoRaiz() {
    var transparente = function (c) { return !c || c === 'transparent' || /rgba\([^)]*,\s*0\)$/.test(c); };
    var h = getComputedStyle(document.documentElement), b = getComputedStyle(document.body);
    if (!transparente(h.backgroundColor) || !transparente(b.backgroundColor)) return;
    var colores = (b.backgroundImage || '').match(/rgba?\([^)]+\)|#[0-9a-fA-F]{3,8}/g);
    var color = colores && colores.length ? colores[colores.length - 1] : '';
    document.documentElement.style.backgroundColor = transparente(color) ? '#000' : color;
  }

  /* Si el <body> lleva perspectiva, transformación o filtro, lo «fijo» queda atado al cuerpo y no a la
     pantalla: en el teléfono, con la barra del navegador visible, lo de abajo se esconde detrás. */
  function atrapaLoFijo(e) {
    var c = getComputedStyle(e);
    return [c.transform, c.perspective, c.filter, c.backdropFilter].some(function (v) { return v && v !== 'none'; }) ||
           /transform|perspective|filter/.test(c.willChange) || /paint|layout|strict|content/.test(c.contain);
  }

  function armar() {
    fondoRaiz();
    var inf = document.querySelector('a.infinito');
    if (!inf) return;
    var cs = getComputedStyle(inf);
    /* Si el cuerpo ata lo fijo, lo más simple es que mida lo visible (100dvh): así los textos fijos
       del portal y sus controles quedan sobre la barra del navegador. Sin dvh, los controles salen del cuerpo. */
    var atrapa = atrapaLoFijo(document.body);
    if (atrapa && window.CSS && CSS.supports('height', '100dvh')) { document.body.style.height = '100dvh'; atrapa = false; }
    var hogar = atrapa ? document.documentElement : document.body;
    if (hogar !== document.body) {
      // el ∞ conserva su letra y su tamaño al salir del cuerpo
      inf.style.fontFamily = cs.fontFamily; inf.style.fontSize = cs.fontSize; inf.style.lineHeight = cs.lineHeight;
      hogar.appendChild(inf);
    }
    var color = presencia(cs.color, 0.6);
    var abajo = cs.bottom, lado = cs.right, tam = cs.fontSize;

    var css = document.createElement('style');
    css.textContent =
      '.umbral-el{position:fixed;z-index:2147483000;color:' + color + ';text-decoration:none;cursor:pointer;' +
      '-webkit-tap-highlight-color:transparent;font-family:Georgia,"Times New Roman",serif;transition:color .6s ease, opacity .6s ease}' +
      '.umbral-el:focus-visible{outline:1px solid currentColor;outline-offset:4px;border-radius:4px}' +
      'a.infinito{color:' + color + ' !important;cursor:pointer !important}' +
      '.umbral-anterior{left:' + lado + ';bottom:' + abajo + ';font-size:calc(' + tam + ' * 1.4);line-height:.8}' +
      '.umbral-leyenda{position:fixed;z-index:2147483000;font-family:Georgia,serif;font-size:10px;letter-spacing:.22em;' +
      'text-transform:uppercase;color:' + color + ';pointer-events:none;opacity:1;transition:opacity 1.6s ease;white-space:nowrap}' +
      '.umbral-leyenda.ida{opacity:0}' +
      '.umbral-parlante{top:calc(env(safe-area-inset-top,0px) + 16px);right:16px;width:44px;height:44px;display:grid;place-items:center;' +
      'background:none;border:0;padding:0;opacity:.85}' +
      '.umbral-parlante .calla{display:none}.umbral-parlante.callado .calla{display:inline}' +
      '.umbral-parlante.callado .onda,.umbral-parlante.quieto .onda{display:none}' +
      '.umbral-parlante.quieto{opacity:.7}' +
      '@media (hover:hover){.umbral-el:hover{opacity:1}}';
    document.head.appendChild(css);

    /* ‹ anterior */
    var ruta = anterior();
    if (ruta) {
      var atras = document.createElement('a');
      atras.className = 'umbral-el umbral-anterior';
      atras.href = ruta; atras.textContent = '‹';
      atras.setAttribute('aria-label', 'Portal anterior');
      atras.addEventListener('click', function (e) { e.stopPropagation(); });
      hogar.appendChild(atras);
    }
    if (!inf.getAttribute('aria-label')) inf.setAttribute('aria-label', 'Portal siguiente');

    /* Leyendas: «anterior» y «siguiente», unos segundos al llegar */
    var leyendas = [];
    /* ¿Pisa la leyenda algún texto del portal? (la línea de código del pie, la invitación a tocar).
       Se cuenta aunque en ese instante esté transparente: puede aparecer después. */
    function pisaTexto(l) {
      var a = l.getBoundingClientRect(), hay = false;
      document.querySelectorAll('body *').forEach(function (e) {
        if (hay || e.classList.contains('umbral-el') || e.classList.contains('umbral-leyenda') || e.closest('.umbral-el')) return;
        var propio = Array.prototype.some.call(e.childNodes, function (n) { return n.nodeType === 3 && n.textContent.trim(); });
        if (!propio) return;   // solo los elementos que llevan texto propio (aunque tengan <br> adentro)
        var r = e.getBoundingClientRect();
        if (!r.width || r.right < a.left || r.left > a.right || r.bottom < a.top || r.top > a.bottom) return;
        var cs = getComputedStyle(e);
        if (cs.visibility === 'hidden' || cs.display === 'none') return;
        hay = true;
      });
      return hay;
    }
    function leyenda(texto, ancla, alineado) {
      var l = document.createElement('div');
      l.className = 'umbral-leyenda'; l.textContent = texto;
      hogar.appendChild(l);
      leyendas.push({ l: l, ancla: ancla, alineado: alineado });
    }
    /* Cada leyenda va al lado de su símbolo, hacia el centro, en su misma línea;
       si en algún portal pisa un texto, las dos pasan debajo de sus símbolos. */
    function ubicar() {
      var lugar = function (donde) {
        leyendas.forEach(function (x) {
          var r = x.ancla.getBoundingClientRect(), h = x.l.getBoundingClientRect().height;
          x.l.style.left = x.l.style.right = '';
          if (donde === 'lado') {
            x.l.style.top = (r.top + r.height / 2 - h / 2) + 'px';
            if (x.alineado === 'izq') x.l.style.left = (r.right + 8) + 'px';
            else x.l.style.right = (innerWidth - r.left + 8) + 'px';
          } else {
            x.l.style.top = (r.bottom + 2) + 'px';
            if (x.alineado === 'izq') x.l.style.left = Math.max(8, r.left) + 'px';
            else x.l.style.right = Math.max(8, innerWidth - r.right) + 'px';
          }
        });
      };
      var pisa = function () { return leyendas.some(function (x) { return pisaTexto(x.l); }); };
      lugar('lado');
      if (pisa()) { lugar('abajo'); if (pisa()) lugar('lado'); }
    }
    requestAnimationFrame(function () {
      if (ruta) leyenda('anterior', atras, 'izq');
      leyenda('siguiente', inf, 'der');
      ubicar();
      setTimeout(function () { leyendas.forEach(function (x) { x.l.classList.add('ida'); }); }, 9000);
    });

    /* El parlante */
    if (!window.__umbral) return;
    var p = document.createElement('button');
    p.type = 'button';
    p.className = 'umbral-el umbral-parlante quieto';
    p.innerHTML = PARLANTE;
    hogar.appendChild(p);
    var pintar = function () {
      var suena = window.__umbral.sonando();
      p.classList.toggle('quieto', !suena && !silencio);
      p.classList.toggle('callado', silencio);
      p.setAttribute('aria-label', suena ? 'Apagar el sonido' : 'Encender el sonido');
    };
    avisar = pintar;
    window.__umbral.repintar = pintar;
    /* La decisión se toma al primer contacto, antes de que el portal oiga el toque:
       si el parlante va a callar o a devolver el sonido, el portal no se entera;
       si el sonido todavía no nació, el toque sigue su camino y el portal lo enciende
       como siempre (con su propio gesto, sea al tocar o al soltar). */
    var decision = null;
    function decidir() {
      var propio = window.umbralSonido;
      if (window.__umbral.sonando()) return 'callar';
      if (propio && propio.encender) return 'propio';
      if (silencio && contextos.length) return 'sonar';
      return 'dejar';
    }
    /* Si los controles viven fuera del cuerpo, el toque que enciende el sonido se le entrega al cuerpo,
       que es donde el portal lo escucha (una sola vez: el original no sigue su camino). */
    function entregar(e) {
      if (hogar === document.body) return;
      e.stopPropagation();
      var Tipo = e.type === 'click' ? MouseEvent : (window.PointerEvent && e.type === 'pointerdown' ? PointerEvent : null);
      if (Tipo) document.body.dispatchEvent(new Tipo(e.type, { bubbles: true, cancelable: true, clientX: e.clientX, clientY: e.clientY }));
    }
    function contacto(e) {
      decision = decidir();
      if (decision !== 'dejar') e.stopPropagation();
      else if (e.type === 'pointerdown') entregar(e);
    }
    ['pointerdown', 'mousedown', 'touchstart'].forEach(function (t) {
      p.addEventListener(t, function (e) { if (t === 'pointerdown' || decision === null) contacto(e); else if (decision !== 'dejar') e.stopPropagation(); }, { passive: true });
    });
    p.addEventListener('click', function (e) {
      var d = decision || decidir(); decision = null;
      if (d !== 'dejar') e.stopPropagation();
      if (d === 'callar') window.__umbral.callar();
      else if (d === 'sonar') window.__umbral.sonar();
      else if (d === 'propio') { silencio = false; window.umbralSonido.encender(); }
      else { silencio = false; entregar(e); }
      setTimeout(pintar, 120); setTimeout(pintar, 600);
    });
    pintar();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', armar);
  else armar();
})();
