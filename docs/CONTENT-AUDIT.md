# Auditoría de contenido — Parte 1

Fuente conceptual: `01-marco-conceptual.md`. Guion aprobado y ampliado: `guion-parte-1.md`.

| Fuente / sección | Escena | Tratamiento |
| --- | --- | --- |
| Pedido de portada del workshop | 1 · antes del guion | “Workshop: Programación Agéntica”, Nicolás Nocete y Agustín Galván; logo PNG original de `docs/media/logounraf.png` debajo, centrado y sin deformación. Se conserva la espera inicial y todo el contenido posterior. |
| Introducción a IA solicitada + `Panorama de Inteligencia Artificial.png` + `Mapa de Inteligencias Computacionales.png` | 1 · después de portada, antes de vidas | Tres diapositivas, nueve beats: pregunta y definición; panorama con cuatro destacados conectados a videojuegos, incluido control por pensamiento como uso experimental; abanico de enfoques y foco en agentes de desarrollo. Ambas imágenes originales completas, locales, sin recorte ni deformación. |
| `docs/linea.md` · historia simplificada + pedido de BERT y Copilot | 1 · después del mapa, antes de vidas | Doce hitos: 1943, 1950, 1956, 1966, 1970–1980, 1997, 2012, 2017, 2018 (BERT), 2021 (GitHub Copilot), 2022 y Actualidad. Seis etapas siempre visibles; resto del detalle en notas, sin contador, submenús ni síntesis adicional. |
| Propósito, alcance, agente de desarrollo | 1–2 | Apertura con vidas; distinción asistente/agente y gameplay en notas. |
| Conceptos esenciales | 2–3, 5, 8 | Modelo, herramientas, prompt, contexto, tokens, spec, evidencia, harness y skills introducidos cuando hacen falta. Glosario completo permanece en la guía. |
| Vibe coding y comparación | 4, 6 | Exploración, riesgos y comparación antes/después. Sin tasas de éxito inventadas. |
| SDD y trazabilidad | 5–6, 9 | Definición, alcance, criterios, evidencia y retorno al plan/spec. |
| Ejemplo vidas y derrota | 1, 6 | Vibe coding y prompt a izquierda, VS central, agente con SDD y spec a derecha. Tres vidas y daño de una vida: valores ilustrativos acordados en el guion, no reglas universales. |
| Contexto y harness | 2–3, 8 | Repositorio, reglas persistentes, selección de información y límites. `.sdd/` y rutas de skills quedan en la guía práctica. |
| Verificación en videojuegos | 6–8 | Lógica, integración, visual y playtest; límites de cada evidencia en notas. |
| SDD en videojuegos · guion 7.1–7.7 | 7 | Siete slides: parámetros de gameplay y tuning; game feel con coyote time y jump buffering; máquinas de estados; playtest y balance; GDD/spec/plan; game design separado de implementación; restricciones de plataforma. Ejemplos desarrollados en notas, síntesis por clic en pantalla. |
| Seguridad y uso académico | 8 | Secretos, permisos, revisión, comprensión y declaración de asistencia. |
| Panorama actual | 9 | OpenCode destacado como herramienta del workshop; Claude Code, Codex e «y muchos más…» en un tercer beat de transición de 9.2, separado de la pregunta final, sin comparativa de productos. |
| BONUS solicitado por el expositor | 10 · después de 9.2 | Tres slides: GDD vivo y anexo de assets; ego de programador con lectura recomendada; duelo como metáfora de la adopción de IA, con una frase enfocada por clic. La infografía original se conserva como referencia local opcional. |

## Decisiones de presentación

- La introducción nueva usa los identificadores de contenido 1.2–1.5 antes de 1.1 para conservar los IDs existentes. Las tres diapositivas iniciales ocupan `#1.3`–`#1.11`; la historia simplificada ocupa `#1.12`–`#1.23`; el ejemplo de vidas pasa a `#1.24`–`#1.26`. El cuarto destacado del panorama sigue en `#1.9`. No cambia la numeración de las demás escenas.
- La historia se organiza en seis etapas didácticas, sin equivalencias rígidas ni escala temporal proporcional. Un paso por hito, todos los años y etapas siempre visibles; se eliminan submenús, contador y cierre extra. El marcador se desplaza suavemente, sin avance automático; retroceso, carga directa, captura y movimiento reducido muestran el estado final.
- Se conserva `docs/linea.md` como fuente original. Sus menciones a GPT-6 y resultados del AI Index 2026 no se proyectan ni se incluyen en notas: faltan fuentes verificables. La pantalla de 2026 expresa solamente la síntesis de agentes, herramientas y supervisión aportada por el documento.
- Las infografías fueron aportadas por el usuario; autoría y licencia no informadas. Se conservan como fuentes locales originales sin atribuciones inventadas. Se aclara su carácter orientativo porque mezclan campos, técnicas y aplicaciones. Los ejemplos de videojuegos son ilustrativos, no evidencia de implementaciones concretas ni correspondencias exclusivas.
- Nueve escenas correspondientes a los nueve bloques originales del guion y una décima escena BONUS. Cada subsección tiene uno o más beats por clic. BONUS se alcanza continuando después del cierre, desde el overview o por URL `#10.1`; los atajos numéricos directos cubren solo las primeras nueve escenas.
- Tema `agent-ready` sobre la base neutral: azul noche, menta y ámbar de la referencia `../create-agent-ready`; Inter y Roboto Condensed empaquetadas localmente. Escenario fijo 1920×1080, sin servicios externos.
- Se conserva la demo original en sus archivos sin montarla; no se modifica el motor ni `examples/`.
- El guion Markdown alimenta directamente las notas del presentador para evitar duplicar la narración.
- `docs/media/2.2.png` es la imagen solicitada; se conserva el archivo original y su proporción, con un recorte visual de la zona superior para eliminar espacio vacío. Se incluye en el bundle.
- Logos de 9.2: SVG de theSVG guardados en `deck/assets/`, sin peticiones remotas. Fuentes: `https://thesvg.org/icons/opencode/default.svg`, `https://thesvg.org/icons/claude-code/default.svg` y `https://thesvg.org/icons/codex/dark.svg`. El cierre conserva sus dos beats y agrega un tercero de transición para las herramientas.
- 2.1: a pedido del usuario, se reemplaza el TODO de foto por los iconos de ChatGPT, Claude, Gemini, v0, Lovable y Replit en una grilla. SVG locales de theSVG, sin peticiones remotas: `https://thesvg.org/icons/openai-chatgpt/default.svg`, `https://thesvg.org/icons/claude/default.svg`, `https://thesvg.org/icons/gemini/default.svg`, `https://thesvg.org/icons/v0/dark.svg`, `https://thesvg.org/icons/lovable/default.svg` y `https://thesvg.org/icons/replit/default.svg`. Marcas de sus respectivos titulares; se mantienen el texto y los beats.
- Autores y título del workshop proporcionados para la portada. Fecha y QR no fueron proporcionados: no se muestran datos ni enlaces inventados.
- Tiempos de salto de 0,1 s y 0,35 s son hipótesis ilustrativas del guion; no recomendaciones universales ni prueba de buen game feel.
- “Evita la mayoría de bugs” y “la IA respeta siempre las reglas” no se presentan como garantías: definir ayuda a prevenir y siempre requiere comprobar.

## Verificación

### Línea histórica interactiva

- Se agregan secuencias cosméticas finitas (hasta 1,8 s) a neurona, Turing, Deep Blue, AlexNet, Transformer/BERT y Copilot. Se ejecutan solo al entrar hacia adelante en la escena visible, sin timers, estado narrativo extra, loops ni avance automático. Los beats correspondientes se marcan `auto` para indicar movimiento autónomo al presentador, no para cambiar de beat. CSS base muestra el estado completo; captura, retroceso, carga directa y movimiento reducido no reproducen las secuencias. Sin tests ni build; animaciones pendientes de revisión visual.
- 1943 incorpora un esquema original explicativo de entradas, umbral y salida binaria. Identifica a McCulloch y Pitts y resume la idea sin atribuir aprendizaje automático al modelo original. Es una simplificación conceptual, sin pasos nuevos ni imágenes externas. Revisión visual pendiente; sin tests ni build.
- Turing incluye un esquema original inspirado en la imagen aportada: máquina y persona ocultas tras una barrera, mensajes de texto e interlocutor sentado. Se explicita el criterio en el sentido correcto: si no logra distinguirlos, la máquina supera la prueba. Las notas aclaran que es una propuesta de Turing, no un experimento realizado ni una prueba de conciencia. No agrega beats; revisión visual pendiente, sin tests ni build.
- Se simplifican los 22 beats originales a diez hitos y se agregan BERT (2018) y GitHub Copilot (2021) por pedido del usuario: doce pasos en total, sin modificar el motor. Copilot se destaca con un icono esquemático de editor y código; su fecha corresponde a la vista previa técnica, confirmada en el anuncio oficial de GitHub del 29 de junio de 2021, enlazado en el guion y las notas. Se actualizan guion, notas y auditoría. Los hitos retirados de pantalla quedan en notas opcionales; la fuente original se conserva intacta.
- Turing conserva su pregunta protagonista. Deep Blue destaca la victoria contra el campeón mundial Garry Kasparov con un símbolo esquemático de ajedrez. AlexNet lleva un esquema de imagen con recuadros, no una inferencia real, y la nota aclara que no fue la primera IA en analizar imágenes. El primer invierno usa azul frío, menor brillo y línea discontinua.
- Se mantiene el pedido de no ejecutar tests, build, typecheck, capturas ni verificaciones automáticas. Navegación, layout y movimiento quedan pendientes de revisión en navegador; los resultados históricos no validan estos cambios.

### Introducción a inteligencia artificial

- Se incorporan las dos imágenes locales y nueve beats de avance manual después de la portada. Los destacados se derivan del beat, sin temporizadores, reproducción automática ni cambios en el motor. El cuarto destacado marca el icono de gaming controlado por pensamiento y compacta la lista para mantener los cuatro ejemplos visibles.
- Se actualizan guion, notas del presentador y auditoría. Se conserva el ejemplo de vidas y todo el contenido posterior.
- Por pedido del usuario, no se ejecutaron tests, build, typecheck, capturas ni verificaciones automáticas. La composición y navegación de la introducción quedan pendientes de validación visual.

### Segunda auditoría · causalidad, jerarquía y movimiento

- Se mantienen identidad visual, número de beats, URLs, logos y todos los contenidos del BONUS. Se conserva el tono de 10.2 pedido por el expositor; la metáfora y su referencia permanecen como material opcional, sin recortar sus frases ni inventar otra fuente.
- 6.2 sustituye el contador continuo por valores discretos. Impactos, corazones, descuento y derrota comparten los mismos hitos temporales; el daño posterior termina antes de la barrera. La representación sigue rotulada como simulación didáctica, no evidencia de un juego implementado.
- Las animaciones de diagramas recuerdan qué elementos ya mostraron: avanzar para agregar una conclusión no reproduce el salto ni las filas previas. Se conserva el estado final estático para carga directa, retroceso, capturas y movimiento reducido; las animaciones pendientes se cancelan al navegar.
- 7.3 muestra la barrera de decisión desde el comienzo y detiene el marcador antes de ella. 8.1 identifica al agente como nodo central y al harness como el conjunto delimitado. 9.1 conecta el retorno tanto con spec como con plan.
- 7.2 aclara en pantalla que el movimiento está ralentizado, sin escala espacial ni temporal. No se alteran las hipótesis de 0,1 s y 0,35 s.
- 3.3 usa un único contenedor compartido, sin compartimentos iguales que sugieran cuotas. 7.1 separa intención, parámetros configurables y ruta técnica. 7.5 desarrolla reaparición en los tres niveles mediante preguntas y decisiones, sin agregar reglas al juego. 7.7 traslada al escenario los casos de input táctil y rendimiento de la narración existente.
- 2.6 reemplaza la equivalencia rígida con chat por «Un asistente responde / Un agente puede actuar», en línea con la narración. Se actualiza el guion para mantener las notas coherentes. 2.2 conserva únicamente la captura real disponible, explícitamente como interfaz: no se inventa una demostración de acción ejecutada.
- Apertura: el último paso retira el esquema lateral y da mayor escala a la conclusión. Comparaciones y pistas previas conservan legibilidad. Se eliminan signos «+» decorativos de los parches y se refuerza el retorno visual de los flujos.
- **Por pedido del usuario, no se ejecutaron tests, build, typecheck, capturas ni verificaciones automáticas.** Solo revisión estática. Pendiente validar las composiciones y la sincronización en navegador; los resultados históricos siguientes no validan esta versión.

### Gráficos animados y gamificación visual

- Se incorpora un lenguaje esquemático de videojuego sin puntos, recompensas, barras cuantitativas inventadas ni servicios externos. Los personajes son formas geométricas originales, no assets atribuidos a un juego real.
- 1.1: personaje y vidas por definir, sin anticipar un número que todavía no se acordó. 2.5: entradas diferenciadas para comparar contexto y acciones. 3.3: piezas de información que entran en una ventana compartida, explícitamente sin proporciones cuantitativas.
- 4.5: parches escalonados y desalineados; cada clic agrega un parche y el último recupera la pregunta original. 6.1: correspondencia animada entre preguntas y reglas, conservando los valores, alcance y evidencia del guion.
- 6.2: simulación didáctica rotulada como tal. Primer beat: contador 3 → 2 → 1 → 0, corazones atenuados y una sola derrota. Segundo beat: daño adicional detenido, contador en cero y sin repetir derrota. Tercero: secuencia compacta y tipos de evidencia; la simulación no se usa como prueba de una implementación real.
- 7.2: personaje recorre el margen posterior al borde y la curva del salto. Se conserva la aclaración «sin escala»; la duración de la animación es didáctica y no representa físicamente los valores ilustrativos de 0,1 s / 0,35 s.
- 7.3: marcador avanza desde ataque y se detiene antes de la transición todavía no acordada. No se inventa una regla Ataque → Stun. 8.1 distingue orientación y comprobación. 9.1 numera estaciones y escalona la aparición de conexiones, conservando el control humano y el retorno al plan.
- Animaciones locales con Web Animations API y `CountUp`, sin estado narrativo adicional, bucles infinitos, avance automático ni timers. Solo se ejecutan al entrar hacia adelante en una escena visible; se cancelan al cambiar de beat. Carga por URL, retroceso, captura y movimiento reducido muestran el estado final. Las ilustraciones con duración apreciable se marcan `auto` y tienen una indicación para el expositor.
- No se modifican el motor, el número de beats ni las coordenadas de navegación. Se conserva la infografía original en su diapositiva independiente.
- Por indicación del usuario, **no se ejecutaron tests, build, typecheck, capturas ni verificaciones automáticas**. Pendiente revisión visual y de navegación de las animaciones; no hay resultados de validación nuevos.

### Refinamiento de jerarquía y dirección de atención

- Se mantienen el tema, la portada, el tono del expositor, los valores del guion y todos los beats, incluida la diapositiva independiente de la infografía original. No se modifica el motor.
- 2.1 prioriza el ejemplo conversacional y reduce el peso de los logos. La definición extensa sigue en las notas del guion. 2.2 amplía el panel de contexto de la imagen original, sin recrearlo ni presentarlo como prueba de una acción.
- 2.5 alinea conversación, contexto y cambios en una comparación por filas. 3.3 separa la ventana finita de la conclusión práctica y sus conceptos auxiliares entre los dos beats existentes.
- 6.1 conserva antes/después y VS; en el tercer beat reemplaza los bloques independientes por preguntas y reglas alineadas A–D. Se preservan todas las reglas, el alcance y la evidencia a obtener. No se agregan reglas de gameplay.
- 7.2 vincula los valores ilustrativos al esquema mediante rótulos y colores. 7.4 da prioridad al hallazgo de playtest. 7.6 saca la conclusión de la columna técnica para darle un cierre común.
- 8.1 distingue las fuentes que orientan al agente de las comprobaciones que salen de su trabajo. 8.2 muestra un registro ilustrativo para el ejemplo de vidas: pasos y esperado definidos; observado explícitamente pendiente, sin resultados ficticios. 9.1 usa un recorrido continuo en dos filas, decisión humana y retorno al plan.
- Apertura, contexto, fixes, parámetros, evidencias y diseño atenúan información previa cuando cambia el foco. El GDD del bonus destaca solo la sección del paso actual. La conclusión positiva del bonus de ego gana jerarquía sin cambiar el tono del título.
- 10.3 reemplaza la tira de fases por «Reacciones posibles · sin orden obligatorio»; se conservan las cinco frases por clic, la aclaración no lineal y el acceso a la imagen original.
- Por indicación del usuario, **no se ejecutaron tests, build, typecheck, capturas ni verificaciones automáticas**. Pendiente validación visual de estos cambios; las capturas y resultados históricos no los validan.

### Infografía original en una diapositiva aparte

- A pedido del usuario, se agrega 10.4 (`#10.12`), después de las cinco frases de 10.3: imagen original completa, sin recorte ni deformación, con crédito visible y aclaración de la metáfora.
- Se conserva el archivo local, el enlace complementario de 10.3 y todos los beats anteriores. La imagen ya no queda disponible solamente mediante un enlace.
- Sin tests, build ni capturas, siguiendo la indicación vigente. Layout pendiente de validación visual.

### Aplicación de la auditoría de layout y decisiones de presentación

- Cambios aplicados en `deck/`, sin modificar el motor. Se conserva la identidad visual, la portada, los hechos del guion, los valores ilustrativos y el tono del expositor en 10.2.
- 1.1: preguntas independientes sin flechas; la conclusión pasa del pie al cuerpo. 2.1: ejemplo conversacional dominante y marcas secundarias. 2.2: recorte de la captura original, explícitamente identificado como interfaz, no como evidencia de una acción ejecutada.
- 2.3: pausa participativa. 2.4–3.3: selección de contexto, permisos y conclusiones visibles; preguntas agrupadas; ventana finita sin porcentajes inventados. Tokens, capacidad, latencia y costo no se presentan como conceptos equivalentes.
- 4.1–5.2: retorno de iteración, titulares con menos competencia, parches dependientes y separación entre definición de SDD y proceso. La spec pasa de estructura general a ejemplo de vidas en el segundo beat.
- 6.1: se preservan izquierda/VS/derecha y las reglas completas; letras A–D relacionan preguntas con respuestas. Reglas, alcance y evidencia se distinguen. 6.2: daño adicional a cero destacado como caso límite.
- 7.1–7.7: parámetros vinculados al tuning; salto esquemático sin escala ni valores nuevos; conexión Ataque/Stun punteada como pregunta, no transición aprobada. Visión, feature y ruta técnica en niveles; separación de roles y verificación en plataforma explícitas.
- 8.1–9.1: harness como relaciones alrededor del agente; estructura de evidencia manual sin resultados ficticios; seguridad por función; comprensión como cierre; ciclo conectado con decisión humana y retorno a spec/plan.
- 9.2: pregunta final sin logos. Nuevo beat `#9.6` para herramientas y puente hacia la práctica; BONUS conserva sus coordenadas de escena. Las notas siguen tomando su narración del guion.
- 10.1: estructura ilustrativa de GDD y una explicación por clic. 10.3: una frase dominante por clic, advertencia no clínica/no lineal visible e infografía completa disponible por enlace al asset local original. No se elimina ni modifica la imagen fuente.
- Los diagramas usan `NodeBox`/`Arrow` del motor. Se excluyen de la animación cosmética general para no sobrescribir la visibilidad propia de sus nodos.
- Por pedido del usuario, **no se ejecutaron tests, build, typecheck, capturas ni verificación de navegación o layout**. Los resultados y capturas históricos siguientes no validan estos cambios. Pendiente revisión visual de todos los beats, proyección y navegación adelante/atrás/URL.

### Rediseño visual con referencia create-agent-ready

- Se elimina el chrome predeterminado (título del workshop, número de escena y ticks) mediante `Chrome: null`, sin modificar el motor ni el presentador. El rótulo de cada slide conserva solo su sección.
- Títulos abreviados y jerarquías diferenciadas; se conservan las ideas, ejemplos, notas del guion, logos, BONUS y pasos por clic. La apertura evita repetir el pedido como título y como contenido principal.
- Composiciones específicas para definiciones, comparaciones, procesos, parámetros, documentos y cierre; no se traslada la maquetación responsive del sitio al escenario.
- Portada `#1.2`: trama de cuadrados ámbar basada en el fallback Canvas 2D de la referencia. Ondas y atractor autónomos sin mouse, solo mientras está visible; se pausa al ocultar la pestaña. No avanza la presentación. `?capture=1` y movimiento reducido muestran un fotograma fijo.
- `npm run build`: aprobado, incluyendo TypeScript y comprobación offline. La nueva fuente es una dependencia local; no requiere red al presentar.
- Revisión visual puntual de 24 estados: `artifacts/theme-review/contact.png` y `artifacts/theme-details/contact.png`. Capturas y auditoría de layout sin errores reportados. Comprobada la variación del canvas sin mouse y su inmovilidad con `?reduced=1`.
- No se ejecutó la suite completa `npm run verify`, siguiendo el pedido de no hacer tests. Los resultados históricos siguientes corresponden a versiones previas y no validan el rediseño completo.

### Historial anterior al rediseño

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
