# Workshop de Programación Agéntica · UNRaf

**De pedir código a dirigir un cambio.**

Material del workshop de programación agéntica de UNRaf, presentado por **Nicolás Nocete y Agustín Galván**.

Una introducción al desarrollo con agentes de IA: cómo aportar contexto, definir cambios, revisar resultados y mantener el control del proyecto, con ejemplos aplicados al desarrollo de videojuegos.

## Contenidos

- **Asistentes y agentes:** diferencias entre responder una consulta y actuar sobre un proyecto.
- **Contexto:** qué necesita conocer un agente y cómo aprovechar la información del repositorio.
- **Vibe coding:** explorar ideas mediante el ciclo de pedir, probar y ajustar.
- **Desarrollo guiado por especificaciones (SDD):** convertir una intención en reglas, alcance y criterios de aceptación.
- **Aplicación en videojuegos:** gameplay, estados, transiciones, playtesting y balance.
- **Control y responsabilidad:** permisos, revisión y evidencia para validar los cambios.

El eje del workshop no es memorizar una herramienta, sino aprender a **dirigir el trabajo y comprobar sus resultados**.

## Material de referencia

- [Create Agent Ready · UNRaf Programación](https://unraf-programacion.github.io/create-agent-ready/)
- [Guion de la parte 1](docs/guion-parte-1.md): desarrollo de los contenidos del workshop.

## Ejecutar la presentación

Necesitás Node.js y npm.

```bash
git clone https://github.com/UNRaf-PROGRAMACION/workshop-agentes-unraf.git
cd workshop-agentes-unraf
npm install
npm run dev
```

Abrí **http://127.0.0.1:5173/**.

### Controles

| Tecla | Acción |
| --- | --- |
| → / ↓ / PageDown | Avanzar |
| ← / ↑ / PageUp | Retroceder |
| F | Pantalla completa |
| O | Vista general |
| P | Ventana del presentador |
| B | Pantalla en negro |

## Organización del proyecto

- [`deck/`](deck/): presentación, escenas y notas.
- [`deck/deck.config.ts`](deck/deck.config.ts): título, expositores y configuración.
- [`docs/`](docs/): guion y recursos del workshop.

## Preparar y verificar

```bash
npm run build
npm run verify
```

La compilación genera la presentación en `dist/` y comprueba que sus recursos no dependan de servicios externos. La verificación recorre las escenas y comprueba su funcionamiento.

Para abrir la versión de producción localmente:

```bash
npm run present
```

## Créditos

Presentación construida con [beatdeck](https://github.com/borjaperfra/beatdeck), de Borja Pérez Francés.
