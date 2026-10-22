# Presentación — Parte 1

## Ejecutar

```bash
npm install
npm run dev
```

Abrir `http://127.0.0.1:5173/#1.1`. La primera pantalla es una espera negra; el primer clic inicia el guion.

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

Las notas se extraen de `guion-parte-1.md`; `deck/talk.ts` define el orden y las apariciones. Las slides de una misma sección son beats de una escena; el número del encabezado corresponde al guion, no al hash.

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

Revisar `artifacts/verify/contact.png` y las capturas grandes del ejemplo 6.1 y la imagen 2.2. No se usan fuentes ni imágenes remotas. No hay secuencias automáticas: cada avance depende del presentador.

## Pendientes explícitos

- Foto para 2.1: espacio reservado con TODO.
- Autor, evento y enlace final no fueron proporcionados y no se muestran. QR desactivado.
- La imagen solicitada se encontró en `docs/media/2.2.png` (con punto antes de la extensión).
- `npm audit` reportó una vulnerabilidad de severidad alta en Vite 6.4.3, ya definido por el proyecto. No se aplicó una actualización de dependencias fuera del alcance de las slides.

## Recuperación

Si hay que recargar, conservar el hash actual. El estado se reconstruye sin repetir acciones ni ejecutar comandos de ejemplo. El guion Markdown sirve como respaldo de la narración.
