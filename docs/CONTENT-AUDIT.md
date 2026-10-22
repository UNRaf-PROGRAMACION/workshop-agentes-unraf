# Auditoría de contenido — Parte 1

Fuente conceptual: `01-marco-conceptual.md`. Guion aprobado y ampliado: `guion-parte-1.md`.

| Fuente / sección | Escena | Tratamiento |
| --- | --- | --- |
| Pedido de portada del workshop | 1 · antes del guion | “Workshop: Programación Agéntica”, Nicolás Nocete y Agustín Galván; logo PNG original de `docs/media/logounraf.png` debajo, centrado y sin deformación. Se conserva la espera inicial y todo el contenido posterior. |
| Propósito, alcance, agente de desarrollo | 1–2 | Apertura con vidas; distinción asistente/agente y gameplay en notas. |
| Conceptos esenciales | 2–3, 5, 8 | Modelo, herramientas, prompt, contexto, tokens, spec, evidencia, harness y skills introducidos cuando hacen falta. Glosario completo permanece en la guía. |
| Vibe coding y comparación | 4, 6 | Exploración, riesgos y comparación antes/después. Sin tasas de éxito inventadas. |
| SDD y trazabilidad | 5–6, 9 | Definición, alcance, criterios, evidencia y retorno al plan/spec. |
| Ejemplo vidas y derrota | 1, 6 | Vibe coding y prompt a izquierda, VS central, agente con SDD y spec a derecha. Tres vidas y daño de una vida: valores ilustrativos acordados en el guion, no reglas universales. |
| Contexto y harness | 2–3, 8 | Repositorio, reglas persistentes, selección de información y límites. `.sdd/` y rutas de skills quedan en la guía práctica. |
| Verificación en videojuegos | 6–8 | Lógica, integración, visual y playtest; límites de cada evidencia en notas. |
| GDD y desarrollo iterativo | 7 | Visión/spec/plan; parámetros, estados, plataforma y playtest. |
| Seguridad y uso académico | 8 | Secretos, permisos, revisión, comprensión y declaración de asistencia. |
| Panorama actual | 9 | OpenCode destacado como herramienta del workshop; Claude Code, Codex e «y muchos más…» en una columna lateral de 9.2, sin comparativa de productos. |

## Decisiones de presentación

- Nueve escenas correspondientes a los nueve bloques del guion. Cada subsección tiene uno o más beats por clic.
- Tema neutral existente, tipografías locales, escenario fijo 1920×1080. Sin servicios externos.
- Se conserva la demo original en sus archivos sin montarla; no se modifica el motor ni `examples/`.
- El guion Markdown alimenta directamente las notas del presentador para evitar duplicar la narración.
- `docs/media/2.2.png` es la imagen solicitada; se conserva su proporción y se incluye en el bundle.
- Logos de 9.2: SVG de theSVG guardados en `deck/assets/`, sin peticiones remotas. Fuentes: `https://thesvg.org/icons/opencode/default.svg`, `https://thesvg.org/icons/claude-code/default.svg` y `https://thesvg.org/icons/codex/dark.svg`. Se mantiene el contenido y los dos beats del cierre.
- TODO: foto de 2.1. Se muestra un espacio explícitamente reservado, sin inventar una imagen.
- Autores y título del workshop proporcionados para la portada. Fecha y QR no fueron proporcionados: no se muestran datos ni enlaces inventados.
- Tiempos de salto de 0,1 s y 0,35 s son hipótesis ilustrativas del guion; no recomendaciones universales ni prueba de buen game feel.
- “Evita la mayoría de bugs” y “la IA respeta siempre las reglas” no se presentan como garantías: definir ayuda a prevenir y siempre requiere comprobar.

## Verificación

- `npm run build`: aprobado, TypeScript + bundle + comprobación offline.
- `npm run verify -- --source=docs/guion-parte-1.md`: aprobado en 144 segundos tras incorporar los logos del cierre. 64 estados recorridos hacia adelante, hacia atrás y por URL; imágenes equivalentes dentro del umbral de 0,1 %, texto y layout correctos, cero errores/advertencias de consola y cero peticiones remotas. Presentador conectado.
- Un texto marcado como exacto coincide con el guion. La fidelidad del resto se documenta en la tabla de contenido, no se deduce de esa comprobación puntual.
- Revisada visualmente `artifacts/verify/contact.png` y capturas grandes de imagen, comparación VS, definición SDD, estados y cierre.
- El primer intento de verificación alcanzó el límite de 120 segundos. Se repitió con un límite mayor sin relajar las comprobaciones.
- Foto 2.1 pendiente y QR no configurado, de forma explícita.

### Corrección de disposición en 6.1

- Vibe coding y prompt a izquierda; agente con SDD y spec a derecha; VS conservado al centro en los tres beats.
- Build aprobado. Verificación completa repetida con salida aislada `artifacts/verify-layout-6/`: 64 estados hacia adelante, atrás y por URL, layout correcto y cero errores de consola o peticiones remotas (141 s).
- Revisados `contact.png`, `walk-06-01.png` y `walk-06-03.png` de esa carpeta. El intento en la carpeta compartida `artifacts/verify/` no terminó por un archivo de captura faltante; la repetición aislada pasó sin cambiar comprobaciones.
