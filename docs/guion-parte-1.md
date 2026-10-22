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

### 7.1 — Parámetros explícitos, no números escondidos

**En pantalla:**

NO MÁS VALORES SIN EXPLICACIÓN.

Velocidad · Gravedad · Tiempos · Tolerancias · Cantidad de enemigos.

Si un valor importa para el diseño, hagámoslo explícito y localizable.

**Narración:**

En videojuegos trabajamos con muchos números que afectan directamente la experiencia.

Si no los definimos, el agente puede elegir valores que parecen razonables y dispersarlos por el código.

La spec puede fijar los valores relevantes o indicar qué debe quedar configurable. El plan técnico define dónde vivirán esos parámetros.

Eso facilita entenderlos, probarlos y modificarlos.

### 7.2 — Del game feel a una hipótesis comprobable

**En pantalla:**

«Que el salto se sienta bien».

Parámetros ilustrativos para probar: coyote time de 0,1 s y tiempo hasta el ápice de 0,35 s.

Playtest: ¿produce la sensación buscada?

Los parámetros se verifican; la experiencia se evalúa jugando.

**Narración:**

El game feel tiene una dimensión subjetiva. Escribir números no elimina esa subjetividad.

Lo que sí podemos hacer es convertir una intención en una hipótesis concreta.

Podemos verificar que el margen para saltar después de abandonar una plataforma sea de una décima de segundo. Después necesitamos comprobar si eso produce la sensación que buscamos.

Los parámetros se verifican; la experiencia se evalúa jugando.

### 7.3 — Estados y reglas en todas partes

**En pantalla:**

JUGANDO ↔ PAUSA. JUGANDO → DERROTA.

¿Qué pasa al perder el foco? ¿Qué pasa con dos entradas simultáneas? ¿Se recibe daño durante la pausa? ¿Qué ocurre después de perder?

**Narración:**

Los juegos están llenos de estados y transiciones.

Muchos errores aparecen en sus límites: pausamos durante una acción, recibimos dos eventos juntos o llega daño después de perder.

Escribir estos casos antes de programar ayuda a prevenir errores y a preparar pruebas. No elimina todos los bugs, pero hace visibles situaciones que de otro modo podríamos descubrir tarde.

### 7.4 — El diseño cambia después del playtest

**En pantalla:**

Playtest → Hallazgo → Spec → Código → Verificación.

Registrar qué cambia y por qué.

**Narración:**

En un juego, iterar es obligatorio. Una spec no busca congelar el diseño.

Si el playtest muestra que algo no funciona, actualizamos la intención y las reglas afectadas antes de pedir el cambio.

Así podemos distinguir una decisión deliberada de un parche que contradice lo anterior.

### 7.5 — GDD, spec y plan: cada uno cumple un papel

**En pantalla:**

GDD: la visión del juego. Fantasía, pilares, bucle, mecánicas y tono.

SPEC: una pieza implementable. Objetivo, reglas, alcance y aceptación.

PLAN: la ruta técnica. Cómo realizar el cambio en este repositorio.

Primero diseñás. Después planificás la implementación.

**Narración:**

En videojuegos ya existe la cultura de documentar el diseño.

El GDD conserva la visión general. La spec no lo reemplaza ni lo convierte automáticamente en código: toma una pieza concreta y la vuelve accionable.

El plan se construye después de inspeccionar cómo está hecho el proyecto.

Si trabajamos solos, esto también separa dos sombreros: primero decidimos como diseñadores; después resolvemos cómo implementarlo.

### 7.6 — Las restricciones también son diseño

**En pantalla:**

¿DÓNDE TIENE QUE FUNCIONAR?

Móvil · Escritorio · Táctil · Orientación · Rendimiento · Tamaño de build.

Reglas estables del proyecto → Specs de cada cambio → Verificaciones.

**Narración:**

Un cambio puede funcionar en nuestra computadora y no cumplir las condiciones de la plataforma de destino.

Las restricciones compartidas pueden quedar en las reglas del proyecto, o constitución si usamos ese nombre.

Tenerlas escritas ayuda a que estén disponibles en cada tarea, pero no garantiza que se respeten: también hay que verificarlas.

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
