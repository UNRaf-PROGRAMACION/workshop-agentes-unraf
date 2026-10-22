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
| SDD en videojuegos · guion 7.1–7.7 | 7 | Siete slides: parámetros de gameplay y tuning; game feel con coyote time y jump buffering; máquinas de estados; playtest y balance; GDD/spec/plan; game design separado de implementación; restricciones de plataforma. Ejemplos desarrollados en notas, síntesis por clic en pantalla. |
| Seguridad y uso académico | 8 | Secretos, permisos, revisión, comprensión y declaración de asistencia. |
| Panorama actual | 9 | OpenCode destacado como herramienta del workshop; Claude Code, Codex e «y muchos más…» en una columna lateral de 9.2, sin comparativa de productos. |
| BONUS solicitado por el expositor | 10 · después de 9.2 | Tres slides: GDD vivo y anexo de assets; ego de programador con lectura recomendada; duelo como metáfora de la adopción de IA, con cinco explicaciones ilustrativas y la infografía original. Se conserva el cierre previo sin cambios. |

## Decisiones de presentación

- Nueve escenas correspondientes a los nueve bloques originales del guion y una décima escena BONUS. Cada subsección tiene uno o más beats por clic. BONUS se alcanza continuando después del cierre, desde el overview o por URL `#10.1`; los atajos numéricos directos cubren solo las primeras nueve escenas.
- Tema neutral existente, tipografías locales, escenario fijo 1920×1080. Sin servicios externos.
- Se conserva la demo original en sus archivos sin montarla; no se modifica el motor ni `examples/`.
- El guion Markdown alimenta directamente las notas del presentador para evitar duplicar la narración.
- `docs/media/2.2.png` es la imagen solicitada; se conserva su proporción y se incluye en el bundle.
- Logos de 9.2: SVG de theSVG guardados en `deck/assets/`, sin peticiones remotas. Fuentes: `https://thesvg.org/icons/opencode/default.svg`, `https://thesvg.org/icons/claude-code/default.svg` y `https://thesvg.org/icons/codex/dark.svg`. Se mantiene el contenido y los dos beats del cierre.
- 2.1: a pedido del usuario, se reemplaza el TODO de foto por los iconos de ChatGPT, Claude, Gemini, v0, Lovable y Replit en una grilla. SVG locales de theSVG, sin peticiones remotas: `https://thesvg.org/icons/openai-chatgpt/default.svg`, `https://thesvg.org/icons/claude/default.svg`, `https://thesvg.org/icons/gemini/default.svg`, `https://thesvg.org/icons/v0/dark.svg`, `https://thesvg.org/icons/lovable/default.svg` y `https://thesvg.org/icons/replit/default.svg`. Marcas de sus respectivos titulares; se mantienen el texto y los beats.
- Autores y título del workshop proporcionados para la portada. Fecha y QR no fueron proporcionados: no se muestran datos ni enlaces inventados.
- Tiempos de salto de 0,1 s y 0,35 s son hipótesis ilustrativas del guion; no recomendaciones universales ni prueba de buen game feel.
- “Evita la mayoría de bugs” y “la IA respeta siempre las reglas” no se presentan como garantías: definir ayuda a prevenir y siempre requiere comprobar.

## Verificación

- BONUS 10.1–10.3: no se ejecutaron build ni tests/verificación automática por indicación del usuario. Pendiente revisar el layout y la navegación en pantalla; los resultados históricos de abajo no validan este agregado.
- Cambio de iconos en 2.1: `npm run build` aprobado (incluido offline). Revisados `artifacts/verify/contact.png` y `direct-02-01.png`: los seis iconos y nombres se ven correctamente. La verificación completa recorrió 67 beats; texto y layout correctos, sin peticiones remotas. No pasó globalmente: cuatro diferencias de imagen en 9.4/9.5 y tres errores `ERR_CONNECTION_REFUSED`; 2.1 sin diferencias reportadas. No se modifican el cierre ni los umbrales para resolverlo dentro de este pedido.
- `npm run build`: aprobado, TypeScript + bundle + comprobación offline.
- `npm run verify -- --source=docs/guion-parte-1.md`: aprobado en 147 segundos tras incorporar la portada. 65 estados recorridos hacia adelante, hacia atrás y por URL; imágenes equivalentes dentro del umbral de 0,1 %, texto y layout correctos, cero errores/advertencias de consola y cero peticiones remotas. Presentador conectado.
- Un texto marcado como exacto coincide con el guion. La fidelidad del resto se documenta en la tabla de contenido, no se deduce de esa comprobación puntual.
- Revisada visualmente `artifacts/verify/contact.png`, incluida la nueva portada. En la revisión anterior también se inspeccionaron capturas grandes de imagen, comparación VS, definición SDD, estados y cierre.
- El primer intento de verificación alcanzó el límite de 120 segundos. Se repitió con un límite mayor sin relajar las comprobaciones.
- Foto 2.1 reemplazada por iconos según el pedido del usuario; QR no configurado, de forma explícita.

### Corrección de disposición en 6.1

- Vibe coding y prompt a izquierda; agente con SDD y spec a derecha; VS conservado al centro en los tres beats.
- Build aprobado. Verificación completa repetida con salida aislada `artifacts/verify-layout-6/`: 64 estados hacia adelante, atrás y por URL, layout correcto y cero errores de consola o peticiones remotas (141 s).
- Revisados `contact.png`, `walk-06-01.png` y `walk-06-03.png` de esa carpeta. El intento en la carpeta compartida `artifacts/verify/` no terminó por un archivo de captura faltante; la repetición aislada pasó sin cambiar comprobaciones.

### Fuentes y tratamiento del BONUS

- 10.1: recomendaciones aportadas por el usuario. El GDD queda editable, se actualiza al aclarar specs y contiene un anexo de referencias, rutas y usos de assets. Implementar lo acordado no implica omitir revisión ni conceder permisos adicionales.
- 10.2: se conserva el tono pedido («Soltá tu fucking ego de programador») y el texto central. La definición se presenta como texto del expositor, no como cita verificada de LinkedIn. Enlace original suministrado por el usuario guardado en `deck/deck.config.ts`, visible como lectura recomendada en los tres beats.
- 10.3: composición inspirada en la imagen compartida: título arriba, lista numerada a la izquierda e infografía completa a la derecha, sin recrear la captura del video. Las frases sobre IA son adaptaciones ilustrativas, no citas de la fuente.
- Infografía original descargada sin modificaciones: `https://psicopedia.org/wp-content/uploads/2026/05/infografia-fases-duelo-kubler-ross-no-lineal.jpg`, guardada en `deck/assets/duelo-kubler-ross.jpg` e importada para uso offline. Crédito visible y enlace: Psicopedia, `https://psicopedia.org/7691/`. Material de terceros; no se atribuye licencia del proyecto a la imagen.
- La fuente explica que las etapas no son obligatorias ni lineales. Se explicita esa limitación en pantalla y se distingue desánimo ilustrativo de diagnóstico clínico en notas.
- Las referencias externas son enlaces de lectura, no recursos cargados por la presentación; sus destinos viven en la configuración para respetar la comprobación offline existente.
