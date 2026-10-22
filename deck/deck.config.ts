/**
 * Everything that may need changing five minutes before going on stage lives here.
 * After editing, rebuild (`npm run build` / `npm run present`).
 */
export const config = {
  title: 'Workshop: Programación Agéntica',
  subtitle: 'Parte 1 · De pedir código a dirigir un cambio',
  author: 'Nicolás Nocete y Agustín Galván',
  /** Destination of the QR on the closing screen. "TODO" = no QR (the presenter view warns). Never guess it. */
  qrUrl: 'TODO',
  /** Shown under the QR. */
  qrLabel: '',
  scaffold: '',
} as const;
