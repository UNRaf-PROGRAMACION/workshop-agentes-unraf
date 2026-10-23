/**
 * Everything that may need changing five minutes before going on stage lives here.
 * After editing, rebuild (`npm run build` / `npm run present`).
 */
export const config = {
  title: 'Workshop: Programación Agéntica',
  subtitle: 'Parte 1 · De pedir código a dirigir un cambio',
  author: 'Ing. Nicolás Nocete y Tec. Agustín Galván',
  /** Destination of the QR on the closing screen. "TODO" = no QR (the presenter view warns). Never guess it. */
  qrUrl: 'https://unraf-programacion.github.io/create-agent-ready/',
  /** Shown under the QR. */
  qrLabel: '',
  scaffold: '',
  /** Reading references only: displayed as links, never fetched by the deck. */
  references: {
    copilot: 'https://github.blog/news-insights/product-news/introducing-github-copilot-ai-pair-programmer/',
    programmerEgo: 'https://www.linkedin.com/posts/quiquefdezguerra_%F0%9D%97%98%F0%9D%97%B9-%F0%9D%97%B2%F0%9D%97%B4%F0%9D%97%BC-%F0%9D%97%B1%F0%9D%97%B2%F0%9D%97%B9-%F0%9D%97%BD%F0%9D%97%BF%F0%9D%97%BC%F0%9D%97%B4%F0%9D%97%BF%F0%9D%97%AE%F0%9D%97%BA%F0%9D%97%AE%F0%9D%97%B1%F0%9D%97%BC%F0%9D%97%BF-share-7418698695203835904-BWHa/',
    grief: 'https://psicopedia.org/7691/',
  },
} as const;
