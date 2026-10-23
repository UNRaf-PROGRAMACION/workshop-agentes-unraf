# Presentación — Parte 1

## Ejecutar

```bash
npm install
npm run dev
```

Abrir `http://127.0.0.1:5173/#1.1`. La primera pantalla es una espera negra; el primer clic muestra la portada `#1.2` y el siguiente inicia el guion.

Para presentar el build offline:

```bash
npm run present
```

## Controles

- Clic, → o PageDown: siguiente beat.
- ← o PageUp: anterior.
- 1–9: inicio de cada sección.
- O: vista general. P: presentador con notas. F: pantalla completa.
- B: ocultar pantalla. Home / End: inicio / final.
- `?reduced=1`: movimiento reducido. Cada estado se reconstruye desde `#escena.beat`.

Las notas se extraen de `guion-parte-1.md`; `deck/talk.ts` define el orden y las apariciones. Las slides de una misma sección son beats de una escena. La audiencia ve solo el nombre de la sección, no el encabezado fijo del workshop ni la numeración técnica; el presentador conserva la navegación y las notas.

El tema vive en `themes/agent-ready.css` y las composiciones en `deck/deck.css`. La portada tiene un fondo de cuadrados ámbar que se mueve sin mouse y se detiene al salir de ella. `?reduced=1` y `?capture=1` lo muestran estático. Las fuentes se incluyen en el build y no necesitan conexión.

### Ilustraciones animadas

- Los gráficos de gameplay y procesos usan `deck/game-visuals.css`, `GameVisuals.tsx` y `TalkDiagrams.tsx`. Son esquemas didácticos, no grabaciones ni pruebas de un proyecto real.
- Al avanzar, dejar terminar la secuencia breve (aproximadamente dos segundos). No hay avance automático: el siguiente clic sigue siendo del expositor. Un clic rápido cancela la animación y muestra el siguiente estado.
- En 6.2, el primer paso muestra las vidas hasta cero y una derrota; el segundo muestra daño adicional ignorado; el tercero relaciona las reglas con tipos de evidencia.
- El salto está ralentizado para explicarlo: no mide ni reproduce los tiempos ilustrativos que aparecen en pantalla. La transición Ataque/Stun se mantiene como pregunta, no como regla resuelta.
- Recargar, abrir por URL, retroceder o usar `?reduced=1` muestra el estado final sin repetir la secuencia. `?capture=1` también desactiva estas animaciones.
- Esta incorporación no se validó con tests, build ni capturas, por indicación del usuario. Las capturas históricas no representan el estado actual.

### Reel de «Un fix sobre otro fix»

- Después de los tres pasos originales, un clic más muestra el reel en `#4.11`.
- Pulsar reproducir en los controles del video. Tiene audio y dura aproximadamente 1 minuto; comprobar el volumen antes de presentar.
- El MP4 y la portada están incluidos localmente: no hace falta abrir Instagram ni tener conexión. El enlace del crédito es opcional y sí requiere internet.
- PageDown / PageUp siguen navegando aunque el video tenga foco. Salir del beat detiene la reproducción; volver muestra la portada, listo para reproducir desde el inicio.

## Mapa rápido

30 slides, nueve secciones y 64 estados de navegación, incluida la espera inicial.

| Tecla / escena | Sección | Estados |
| --- | --- | --- |
| 1 | Apertura | 4 |
| 2 | Asistente y agente | 9 |
| 3 | Contexto | 6 |
| 4 | Vibe coding | 10 |
| 5 | SDD | 4 |
| 6 | Vidas y derrota | 6 |
| 7 | SDD en videojuegos | 13 |
| 8 | Control y seguridad | 7 |
| 9 | Hacia la práctica | 5 |

Accesos útiles: `#2.2` muestra la imagen del agente, `#6.3` la comparación completa con VS, `#7.7` los estados y casos borde y `#9.5` la pregunta de cierre.

## Verificación

```bash
npm run build
npm run verify -- --source=docs/guion-parte-1.md
```

Revisar `artifacts/verify/contact.png` y las capturas grandes del ejemplo 6.1 y la imagen 2.2. No se usan fuentes ni imágenes remotas. Solo la portada tiene movimiento ambiental automático: cada avance depende del presentador. El rediseño se revisó con capturas puntuales en `artifacts/theme-review/` y `artifacts/theme-details/`, sin ejecutar la suite completa por pedido del usuario.

## Pendientes explícitos

- Foto para 2.1: espacio reservado con TODO.
- Autor, evento y enlace final no fueron proporcionados y no se muestran. QR desactivado.
- La imagen solicitada se encontró en `docs/media/2.2.png` (con punto antes de la extensión).
- `npm audit` reportó una vulnerabilidad de severidad alta en Vite 6.4.3, ya definido por el proyecto. No se aplicó una actualización de dependencias fuera del alcance de las slides.

## Recuperación

Si hay que recargar, conservar el hash actual. El estado se reconstruye sin repetir acciones ni ejecutar comandos de ejemplo. El guion Markdown sirve como respaldo de la narración.
