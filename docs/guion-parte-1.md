# Desarrollo guiado por agentes
## Parte 1 — De pedir código a dirigir un cambio

Fuente: [01-marco-conceptual.md](01-marco-conceptual.md) y ajustes acordados para esta presentación.

Audiencia: estudiantes de videojuegos y otras áreas de desarrollo. Duración orientativa: 30–40 minutos con participación.

Idea central: el agente puede acelerar el trabajo; definir la intención, establecer límites y aceptar el resultado sigue siendo responsabilidad humana.

Los prompts son ejemplos didácticos, no citas externas. Los valores de vidas y salto son ilustrativos y deben acordarse para el juego real. Foto de 2.1: TODO. Imagen de 2.2: `docs/media/2.2.png`.

## 1. Apertura

### 1.1 — Agregá un sistema de vidas

**En pantalla:**

Agregá un sistema de vidas.

Preguntas que aparecen después: ¿Cuántas vidas? ¿Qué cuenta como daño? ¿Qué pasa al llegar a cero?

Remate: Pedir código no es lo mismo que definir un cambio.

**Narración:**

Imaginen que abrimos una herramienta de IA y escribimos esto.

Puede devolver código que compila. Incluso puede aparecer un contador de vidas en pantalla.

Pero ¿cuántas vidas tenemos? ¿Qué cuenta como daño? ¿Podemos quedar con vidas negativas? ¿Qué pasa cuando llegamos a cero?

El pedido parece simple, pero contiene decisiones que todavía no tomamos.

¿Qué le preguntarían a quien pidió esta funcionalidad antes de empezar a programarla?

Dejar que aparezcan dos o tres respuestas.

Para entender cómo trabajar mejor con estas herramientas, primero tenemos que distinguir un asistente de un agente.

## 2. ¿Qué es un agente de desarrollo?

### 2.1 — ¿Qué es un asistente?

**En pantalla:**

Un asistente responde.

Un chat donde podés hacer preguntas y recibir respuestas.

Ejemplos: «Explicame esta función». «¿Qué significa este error?». «Dame un ejemplo de movimiento».

Visual: espacio amplio reservado para una foto. TODO: seleccionar imagen.

**Narración:**

El asistente es una interfaz que muchos ya conocemos: escribimos una pregunta y recibimos una respuesta.

Podemos pedir explicaciones, ejemplos o sugerencias. Después, nosotros trasladamos esas respuestas al proyecto.

Si queremos que responda sobre nuestro juego, tenemos que compartirle el contexto relevante: el código, el error o las reglas que necesitamos respetar.

### 2.2 — ¿Qué es un agente de programación?

**En pantalla:**

Modelo (LLM) + Instrucciones (prompts) + Herramientas (tools).

Modelo: genera respuestas y propone acciones. Instrucciones: orientan la tarea y sus límites. Herramientas: permiten leer, editar y ejecutar.

Visual: `docs/media/2.2.png`.

**Narración:**

Un agente combina un modelo con instrucciones y herramientas.

El modelo interpreta el pedido y propone cómo avanzar. Las instrucciones orientan su comportamiento. Las herramientas le permiten actuar: leer archivos, buscar código, editar o ejecutar pruebas.

En este workshop hablamos de agentes de desarrollo. No de los NPC o los enemigos que forman parte del juego.

Un agente puede ayudarnos a implementarlos, pero no determina automáticamente si su comportamiento es correcto o divertido.

### 2.3 — Asistente vs. agente

**En pantalla:**

Asistente: hacés preguntas y recibís respuestas. Le compartís el contexto del proyecto.

Agente: ¿qué cambia?

**Narración:**

Hasta acá, ambos pueden tener una conversación con nosotros.

Pero antes de completar la diferencia, necesitamos aclarar una palabra que vamos a usar todo el tiempo: contexto.

### 2.4 — ¿Qué es el contexto?

**En pantalla:**

La información disponible para trabajar sobre una tarea.

Nuestro videojuego: documentación, código, escenas, reglas y pruebas.

Tener acceso a la carpeta no significa haber leído todo.

**Narración:**

El contexto incluye los documentos y archivos que queremos que la IA conozca para interpretar nuestro pedido.

En nuestro caso, gran parte está en la carpeta raíz del videojuego: nuestro codebase o repositorio.

Ahí están las pistas sobre cómo funciona el proyecto y qué decisiones ya existen.

El agente necesita buscar y leer lo relevante. No conoce automáticamente cada archivo por el hecho de estar trabajando dentro del proyecto.

### 2.5 — Asistente vs. agente: ahora sí

**En pantalla:**

Asistente: conversás y recibís respuestas; le compartís información; aplicás sus propuestas.

Agente: conversás y puede actuar sobre el proyecto; puede buscar y leer archivos; puede crear, editar, mover o eliminar archivos.

Según las herramientas y los permisos disponibles.

**Narración:**

La diferencia es que el agente puede pasar de sugerir una acción a ejecutarla.

Puede modificar el proyecto y ejecutar comandos. Por eso los permisos importan.

Que una herramienta permita eliminar archivos no significa que el agente tenga autorización para borrar cualquier cosa.

### 2.6 — Chat que acciona

**En pantalla:**

ASISTENTE = CHAT

AGENTE = CHAT, PERO QUE ACCIONA

**Narración:**

Esta es la simplificación que nos vamos a llevar.

El asistente responde. El agente, además, puede actuar mediante herramientas.

Nosotros seguimos definiendo el objetivo, los permisos y qué resultado aceptamos.

## 3. El contexto también es parte del trabajo

### 3.1 — El prompt no es todo el contexto

**En pantalla:**

Lo que pedís: «Agregá enemigos que persigan al jugador».

Lo que necesita saber: ¿cómo se mueve el jugador?, ¿qué sistema de enemigos existe?, ¿qué reglas define el diseño?, ¿qué archivos puede modificar?, ¿cómo comprobamos que funciona?

**Narración:**

El prompt expresa una intención. El contexto permite interpretarla dentro de nuestro juego.

“Perseguir al jugador” puede significar cosas distintas: avanzar en línea recta, usar navegación, mantener distancia o abandonar la persecución.

Si esas decisiones no están disponibles, el agente puede preguntar o completar los huecos con supuestos.

### 3.2 — Nuestro proyecto tiene las pistas

**En pantalla:**

GDD y documentación: qué queremos construir.

Código y escenas: cómo funciona hoy.

Reglas del proyecto: cómo debemos trabajar.

Pruebas: cómo comprobamos los cambios.

Decisiones previas: qué acordamos y por qué.

Más contexto no siempre es mejor contexto.

**Narración:**

No se trata de entregar todos los archivos sin criterio.

Necesitamos información relevante, actualizada y confiable para la tarea.

Tampoco deberíamos incluir secretos, datos personales o material que no tenemos autorización para compartir.

### 3.3 — El contexto tiene un límite

**En pantalla:**

Ventana de contexto: cantidad limitada de información que el modelo puede considerar durante una interacción.

Instrucciones + archivos leídos + conversación + resultados.

Tokens: capacidad de contexto, latencia y costo.

**Narración:**

Los modelos procesan unidades de texto llamadas tokens. La cantidad de información que pueden considerar es limitada.

No conviene depender de una conversación interminable como único lugar donde guardamos las decisiones.

Registrar acuerdos en archivos y trabajar con tareas pequeñas ayuda a recuperar el contexto relevante.

Esto se vuelve especialmente importante cuando desarrollamos a fuerza de pedidos y correcciones.

## 4. Vibe coding: explorar una idea

### 4.1 — Pedir, probar, ajustar

**En pantalla:**

Prompt → Generación → Prueba → Otro prompt.

«Hacé que funcione».

**Narración:**

Vibe coding es el nombre que Andrej Karpathy dio en 2025 a una forma de programar asistida por IA basada en expresar la intención y dejar que la herramienta genere código.

Pedimos algo, probamos el resultado y ajustamos las instrucciones.

Para explorar una idea, ese ciclo puede ser muy rápido.

### 4.2 — La IA no lee tu mente

**En pantalla:**

Si queremos controlar mejor el cambio, necesitamos definirlo antes de implementarlo.

LA IA NO LEE TU MENTE.

Lo que no definís queda abierto a interpretación.

**Narración:**

Podemos tener una imagen muy clara de cómo debería sentirse un salto o comportarse un enemigo.

Pero esa intención no se transmite automáticamente.

Si pedimos “que se mueva mejor”, todavía falta definir qué significa mejor para este juego.

### 4.3 — Rápido para explorar

**En pantalla:**

Puede servir para: un prototipo de una tarde, explorar una mecánica, aprender con ejemplos, probar una idea descartable.

Cuando el proyecto crece: aparecen requisitos contradictorios, algunas decisiones quedan fuera del contexto, los cambios pueden ser más difíciles de revisar.

**Narración:**

Dicho de forma provocadora: lanzamos prompts y esperamos que nos resuelva la vida.

No es malo explorar así. Para un prototipo de una tarde o para probar si una mecánica resulta divertida, puede ser rapidísimo.

El problema aparece cuando el proyecto crece sin que hagamos explícitas las reglas y decisiones. No es un destino inevitable, pero aumenta el riesgo de acumular contradicciones.

### 4.4 — ¿Les pasó?

**En pantalla:**

El personaje se mueve raro. El nivel pierde consistencia. Los enemigos no hacen lo esperado.

PEDÍS UN ARREGLO. ARREGLA UNA COSA Y ROMPE OTRA.

**Narración:**

¿Les pasó al probar esta forma de trabajo?

Pedimos corregir el movimiento y cambia el salto. Ajustamos los enemigos y dejan de respetar otra regla.

Cada arreglo parece razonable por separado, pero el conjunto pierde coherencia.

Necesitamos comprobar no solamente lo que cambió, sino también qué debía seguir funcionando.

### 4.5 — Un fix sobre otro fix

**En pantalla:**

FIX / OTRO FIX / OTRO FIX MÁS / ¿QUÉ QUERÍAMOS HACER?

Más prompts no reemplazan una definición compartida.

**Narración:**

Después de una hora de “no, así no”, el proyecto puede convertirse en un fix sobre otro fix.

El problema no es solamente la cantidad de código. Es que ya no tenemos una referencia clara para decidir si estamos avanzando.

Para controlar mejor ese proceso, proponemos hacer explícito el cambio antes de implementarlo.

## 5. SDD: hacer explícito el cambio

### 5.1 — ¿Qué es SDD?

**En pantalla:**

SDD. Spec-Driven Development. Desarrollo guiado por especificaciones.

Definir el cambio esperado antes de implementarlo y comprobar el resultado contra esa definición.

INTENCIÓN → SPEC → PLAN → CÓDIGO → EVIDENCIA.

**Narración:**

En este workshop usamos SDD como una práctica de especificación y trazabilidad.

Primero hacemos explícito un cambio pequeño. Después inspeccionamos el proyecto, definimos un plan, implementamos y verificamos.

No reemplaza el diseño de juego, las pruebas, la revisión de código o la seguridad. Ayuda a conectarlos.

### 5.2 — ¿Qué contiene una spec?

**En pantalla:**

Objetivo: qué problema resuelve.

Alcance: qué cambia y qué queda afuera.

Reglas y restricciones: qué debe cumplirse.

Criterios de aceptación: qué esperamos observar.

Evidencia: cómo vamos a comprobarlo.

Supuestos y preguntas abiertas: visibles, no escondidos.

Pequeña. Concreta. Revisable.

**Narración:**

Una spec no es un documento enorme.

Es un contrato revisable que permite conversar sobre el cambio antes de invertir en implementarlo.

Si falta una decisión importante, no necesitamos inventarla: necesitamos señalarla y resolverla.

## 6. Vidas y derrota: antes y después

### 6.1 — La misma intención, dos formas de pedirla

**En pantalla:**

Una única pantalla: Vibe coding con el prompt vago a la izquierda, VS en el centro, agente con SDD y su spec a la derecha.

ANTES · VIBE CODING: «Agregá un sistema de vidas y que el jugador pierda cuando se quede sin vidas».

Preguntas: ¿cuántas vidas?, ¿cuánto daño?, ¿puede quedar en negativo?, ¿qué pasa después de perder?

DESPUÉS · AGENTE CON SDD:

- Feature: vidas y derrota.
- Inicio: 3 vidas.
- Cada evento de daño válido resta 1.
- Las vidas nunca bajan de 0.
- Con 0, activar derrota una sola vez.
- Tras la derrota, ignorar nuevos eventos de daño.
- Fuera de alcance: animaciones y balance.
- Evidencia: 3 → 2 → 1 → 0 → 0, una única derrota y comprobación visual de su señal.

Valores ilustrativos, propuestos para este ejemplo.

**Narración:**

Volvamos al pedido inicial.

A la izquierda tenemos una intención válida, pero incompleta. No sabemos cuántas vidas hay, cuánto se pierde ni qué pasa después de la derrota.

A la derecha proponemos decisiones concretas para orientar al agente. Esos valores no son universales: hay que acordarlos para el juego real.

La diferencia es que ahora tenemos una referencia para revisar el resultado.

### 6.2 — De la regla a la evidencia

**En pantalla:**

3 ♥ → 2 ♥ → 1 ♥ → 0 ♥ → DERROTA.

Nuevo daño → 0 ♥ → Sin repetir derrota.

Las vidas no son negativas: prueba de lógica.

La derrota se activa una vez: prueba de eventos o integración.

La señal de derrota aparece: comprobación visual.

Cumplir la regla ≠ garantizar una buena experiencia.

**Narración:**

Cada regla necesita una forma de comprobación.

Una prueba lógica verifica el límite de vidas. Una prueba de eventos puede comprobar que la derrota se active una sola vez. La comprobación visual muestra si aparece su señal.

Ninguna de esas evidencias demuestra, por sí sola, que la dificultad esté balanceada o que la derrota se entienda bien. Para eso necesitamos observar a personas jugando.

## 7. ¿Por qué SDD ayuda en videojuegos?

### 7.1 — Parámetros de gameplay explícitos

**En pantalla:**

PARÁMETROS DE GAMEPLAY, NO NÚMEROS MÁGICOS.

Velocidad · Gravedad · Cooldowns · Daño · Spawn de enemigos.

Valores localizables y configurables para facilitar el tuning.

**Narración:**

La velocidad de movimiento, la gravedad, el daño, los cooldowns —tiempos de espera entre usos— y el spawn de enemigos afectan cómo se juega.

Si no los definimos, el agente puede elegir valores por su cuenta y dejarlos dispersos por el código como números mágicos: valores sin una intención de diseño visible.

La spec define qué parámetros importan y cuáles deben quedar configurables. El plan técnico decide dónde centralizarlos, por ejemplo en ScriptableObjects si trabajamos en Unity.

Esto facilita el tuning: ajustar los parámetros, probar el resultado y volver a modificarlos sin perseguir valores por todo el proyecto.

### 7.2 — Del game feel a una hipótesis jugable

**En pantalla:**

«Que el salto se sienta responsivo».

Coyote time · Jump buffering · Control aéreo · Tiempo hasta el ápice.

Hipótesis ilustrativa: coyote time de 0,1 s y tiempo hasta el ápice de 0,35 s.

Playtest: ¿produce el game feel buscado?

Los parámetros se verifican; la experiencia se evalúa jugando.

**Narración:**

El game feel es cómo se siente controlar y jugar: la agilidad del movimiento, el peso del personaje o el impacto de una acción. Pedir que un salto se sienta responsivo comunica una intención, pero admite muchas implementaciones.

Podemos concretarla con coyote time —un margen para saltar después de abandonar una plataforma—, jump buffering —recordar brevemente un salto pulsado antes de tocar el suelo—, control aéreo y tiempo hasta el ápice, el punto más alto del salto.

Por ejemplo, podemos proponer un coyote time de 0,1 segundos y un tiempo hasta el ápice de 0,35 segundos. Son valores ilustrativos para probar, no una receta universal para un buen salto.

Verificar esas reglas confirma que implementamos lo acordado. El playtest permite evaluar si logramos el game feel buscado: escribir números no elimina la dimensión subjetiva de la experiencia.

### 7.3 — Estados y transiciones sin comportamientos accidentales

**En pantalla:**

MÁQUINAS DE ESTADOS: IDLE · MOVIMIENTO · ATAQUE · STUN · MUERTE.

¿Qué interrumpe un ataque? ¿Qué input tiene prioridad? ¿Qué ocurre al pausar o perder el foco?

**Narración:**

Las máquinas de estados organizan comportamientos como idle —reposo—, movimiento, ataque, stun —aturdimiento— y muerte. La spec aclara qué transiciones están permitidas y cuáles no.

Los casos límite aparecen cuando las reglas se cruzan: recibimos daño durante un ataque, llegan dos inputs simultáneos o activamos la pausa justo antes de morir. También hay que decidir qué sucede si la aplicación pierde el foco.

Definir interrupciones y prioridades evita que el resultado dependa accidentalmente del orden del código. No elimina todos los bugs, pero permite preparar pruebas para situaciones que de otro modo descubriríamos tarde.

### 7.4 — Playtest y balance con cambios trazables

**En pantalla:**

Playtest → Hallazgo → Spec → Código → Verificación.

Cada ajuste de balance responde a un hallazgo y una intención.

**Narración:**

Si una habilidad domina el combate o la curva de dificultad resulta frustrante, el playtest nos da un motivo para revisar el balance. Una spec no busca congelar el diseño.

Antes de tocar el código, registramos qué observamos, qué queremos mejorar y qué reglas vamos a cambiar: daño, cooldowns, frecuencia de spawn u otros parámetros afectados.

Actualizamos la spec, implementamos el ajuste y volvemos a verificar y jugar. Así cada cambio puede evaluarse contra su intención, en lugar de acumular parches contradictorios.

### 7.5 — Del GDD a una feature implementable

**En pantalla:**

GDD: visión, pilares, core loop, mecánicas y tono.

SPEC: una feature concreta. Comportamiento, alcance y criterios de aceptación.

PLAN: la ruta técnica. Cómo realizar el cambio en este repositorio.

GDD → Spec de una feature → Plan técnico.

**Narración:**

El GDD, o Game Design Document, conserva la visión del juego, sus pilares y el core loop: el ciclo principal de acciones que repite el jugador.

La spec recorta una feature concreta —por ejemplo, el sistema de reaparición— y define su comportamiento, alcance y criterios de aceptación. No reemplaza al GDD ni lo convierte automáticamente en código.

El plan técnico explica cómo integrar esa feature después de inspeccionar el proyecto real. Los tres documentos se complementan: no son tres versiones del mismo contenido.

### 7.6 — Separar game design e implementación

**En pantalla:**

PRIMERO LA EXPERIENCIA. DESPUÉS LA SOLUCIÓN TÉCNICA.

Game design: qué necesita el jugador y cuáles son las reglas.

Implementación: cómo construirlo en este proyecto.

**Narración:**

En un equipo indie, una misma persona puede ocuparse del game design y de la programación. Cambiar de rol todo el tiempo hace fácil elegir una mecánica porque resulta cómoda de implementar.

La spec ayuda a separar esas decisiones: primero definimos qué experiencia buscamos y sus reglas; después resolvemos cómo construirla.

Si una limitación técnica obliga a revisar el diseño, lo hacemos explícito. Así distinguimos una decisión deliberada de una solución que terminó definiendo el gameplay sin que lo notáramos.

### 7.7 — Restricciones de plataforma desde el diseño

**En pantalla:**

¿DÓNDE TIENE QUE FUNCIONAR?

Input táctil · Resolución · Orientación · Presupuesto de rendimiento · Tamaño de build.

Reglas estables del proyecto → Specs de cada cambio → Verificaciones.

**Narración:**

Una interacción pensada para teclado puede no funcionar bien con input táctil. Una feature puede correr en nuestra computadora y exceder el presupuesto de rendimiento de la plataforma de destino.

Los controles, la resolución, la orientación, el rendimiento y el tamaño de build condicionan las soluciones desde el diseño. Las restricciones compartidas pueden quedar en las reglas del proyecto, o constitución si usamos ese nombre.

Dejarlas explícitas permite incorporarlas a las specs y a la implementación de cada cambio. No alcanza con escribirlas: también hay que comprobarlas en la plataforma de destino.

## 8. Control, seguridad y responsabilidad

### 8.1 — El entorno de trabajo también se diseña

**En pantalla:**

HARNESS: reglas, instrucciones, herramientas y verificaciones que encuadran el trabajo del agente.

AGENTS.md: cómo trabajar en este repositorio.

Skills: procesos reutilizables para tareas concretas.

Specs y planes: qué cambio estamos realizando.

Pruebas y comandos: cómo comprobarlo.

**Narración:**

No dependemos únicamente de escribir un buen prompt cada vez.

Podemos preparar un entorno que conserve reglas y procesos útiles.

El objetivo no es acumular archivos, sino resolver ambigüedades reales y facilitar la verificación.

### 8.2 — Una respuesta convincente no es evidencia

**En pantalla:**

«YA ESTÁ ARREGLADO».

¿QUÉ LO DEMUESTRA?

Diff · Pruebas · Build · Ejecución · Capturas · Playtest.

Prueba manual: pasos, resultado esperado, resultado observado y limitaciones.

**Narración:**

El agente puede afirmar que terminó y estar equivocado.

Antes de aceptar, revisamos qué cambió y qué comprobaciones se realizaron.

Si no hay automatización, una prueba manual también sirve, pero debe registrar los pasos, el resultado esperado, el observado y sus limitaciones.

No haber encontrado un error no equivale a demostrar que no existe ninguno.

### 8.3 — Más autonomía exige más control

**En pantalla:**

MÁS AUTONOMÍA → MÁS LÍMITES Y OBSERVABILIDAD.

- No compartir secretos ni datos personales.
- Revisar herramientas, scripts y skills externas.
- Detenerse ante ambigüedades o acciones destructivas.
- Pedir aprobación antes de publicar o salir del alcance.

Uso académico: comprender, explicar y declarar la asistencia cuando corresponda.

**Narración:**

Cuanto mayor es el impacto posible, más importantes son los permisos mínimos y los puntos de aprobación humana.

En un trabajo académico también tenemos que poder explicar la intención, el proceso y la evidencia.

Usar un agente no reemplaza comprender lo que entregamos. Y debemos declarar la asistencia de IA cuando la institución lo requiera.

## 9. Cierre y puente hacia la práctica

### 9.1 — El ciclo completo

**En pantalla:**

INTENCIÓN → SPEC → PLAN.

CAMBIO PEQUEÑO → VERIFICACIÓN → EVIDENCIA.

DECISIÓN HUMANA: aceptar, ajustar o detener.

Si falla la evidencia o aparece información nueva: volver a la spec o al plan.

**Narración:**

Este es el ciclo que vamos a practicar.

El agente puede ayudarnos en cada etapa. Si aparece información nueva o la evidencia falla, volvemos a la spec o al plan.

La aceptación del resultado sigue siendo una decisión humana: aceptar, ajustar o detener.

### 9.2 — Lo importante no es memorizar una herramienta

**En pantalla:**

CONTEXTO · LÍMITES · EVIDENCIA · DECISIÓN HUMANA.

OpenCode: la herramienta del workshop, no el método.

No solamente: «¿La IA escribió código?».

¿Podemos explicar qué cambió y con qué evidencia lo aceptamos?

**Narración:**

En el workshop vamos a usar OpenCode. Existen otras herramientas y el ecosistema cambia rápido.

La habilidad transferible es saber definir una tarea, darle el contexto necesario, limitar lo que puede cambiar y comprobar el resultado.

En la parte práctica vamos a tomar una intención, convertirla en una spec pequeña, revisar un plan e implementar un cambio verificable.

La pregunta no va a ser solamente “¿la IA escribió código?”. Va a ser: “¿podemos explicar qué cambió y con qué evidencia lo aceptamos?”.

## 10. BONUS · Preguntas comunes, criterios y tips

### 10.1 — BONUS · Tips para trabajar con agentes

**En pantalla:**

PREGUNTAS COMUNES · CRITERIOS · TIPS

- ¿Dónde guardo el diseño? En un GDD vivo. Recomendamos Markdown o un formato editable.
- ¿Quién lo actualiza? Pedile al agente que registre las decisiones a medida que se aclaran las specs.
- ¿Qué assets debe usar? Incluí un anexo en el GDD: referencias, archivos, rutas y para qué usar cada asset.

Decisiones claras → el agente puede implementar sin adivinar.

El GDD conserva las decisiones; las specs concretan cada cambio.

**Narración:**

Este bonus reúne preguntas comunes, criterios y tips para trabajar con agentes.

Podés tener un Game Design Document en Markdown o en un formato editable, y pedirle al agente que lo mantenga actualizado cuando se aclaren las specs. Las decisiones importantes no deberían quedar solamente en el chat.

En el mismo GDD, o en un anexo referenciado desde él, indicá qué assets usar, dónde están y qué función cumplen. Así el agente puede pasar a implementar lo acordado sin adivinar las referencias. Eso no reemplaza revisar el resultado ni amplía sus permisos.

### 10.2 — Soltá tu fucking ego de programador

**En pantalla:**

¿Saben lo que es?

El ego del programador es creer que su valor está en cuánto código sabe escribir, en lugar de cuánto es capaz de resolver, aprender y construir.

CUANDO HABLAMOS DE UN LLM…

- «Se equivocan».
- «Generan código mediocre».
- «Nosotros lo haríamos mejor».

NUESTRO VALOR NO ESTÁ EN ESCRIBIR CÓDIGO.

Está en saber qué construir, cuándo, por qué y con qué nivel de calidad.

En cuestionar, revisar, decidir y asumir responsabilidad.

Lectura recomendada: «El ego del programador» · LinkedIn.

**Narración:**

La regla clave: soltar el ego de programador. ¿Saben lo que es? Es confundir nuestro valor con cuánto código sabemos escribir, en lugar de cuánto podemos resolver, aprender y construir.

Cuando hablamos de un LLM aparecen estas objeciones: se equivocan, generan código mediocre y nosotros lo haríamos mejor. Reconocer limitaciones es necesario; usarlas para defender nuestra identidad no reemplaza evaluar qué herramienta sirve para cada tarea.

Nuestro valor no está en escribir código: está en decidir qué construir, cuándo, por qué y con qué nivel de calidad. En cuestionar, revisar, decidir y asumir responsabilidad. Aceptar ayuda no significa aceptar cualquier resultado.

El enlace de lectura recomendado es el artículo compartido por el expositor: https://www.linkedin.com/posts/quiquefdezguerra_%F0%9D%97%98%F0%9D%97%B9-%F0%9D%97%B2%F0%9D%97%B4%F0%9D%97%BC-%F0%9D%97%B1%F0%9D%97%B2%F0%9D%97%B9-%F0%9D%97%BD%F0%9D%97%BF%F0%9D%97%BC%F0%9D%97%B4%F0%9D%97%BF%F0%9D%97%AE%F0%9D%97%BA%F0%9D%97%AE%F0%9D%97%B1%F0%9D%97%BC%F0%9D%97%BF-share-7418698695203835904-BWHa/

La definición en pantalla es el texto aportado por el expositor, no una cita textual verificada del artículo.

### 10.3 — El duelo como metáfora de la adopción de IA.

**En pantalla:**

1. Negación: «Esto no puede hacer mi trabajo».
2. Ira: «Se equivoca; yo lo haría mejor».
3. Negociación: «Bueno, que haga solamente lo repetitivo».
4. Depresión / desánimo: «Entonces, ¿dónde queda mi valor?».
5. Aceptación: «Mi criterio sigue siendo clave; puedo construir con estas herramientas».

Infografía: etapas del proceso de pérdida según E. Kübler-Ross.

Es una metáfora: no son etapas obligatorias ni lineales.

Fuente de la infografía: Psicopedia · https://psicopedia.org/7691/

**Narración:**

Usamos el duelo como metáfora de nuestra relación con la adopción de IA, no como diagnóstico ni como una explicación clínica de esa adopción. Las frases son ejemplos ilustrativos adaptados a la charla, no citas de Psicopedia.

Negación: rechazar de entrada que la herramienta pueda participar de nuestro trabajo.

Ira: reaccionar con enojo ante sus errores y compararla constantemente con lo que haríamos nosotros.

Negociación: empezar a darle un lugar, aunque sea limitado a tareas repetitivas.

Depresión o desánimo: preguntarnos dónde queda nuestro valor cuando cambia la forma de trabajar. Aquí hablamos de una reacción ilustrativa de desánimo, no de un diagnóstico de depresión.

Aceptación: integrar las herramientas con criterio, revisión y responsabilidad. No significa creer que nunca se equivocan.

La fuente aclara que las fases no son una secuencia obligatoria ni lineal. La infografía original se conserva completa a la derecha; las explicaciones adaptadas aparecen a la izquierda, una por clic.
