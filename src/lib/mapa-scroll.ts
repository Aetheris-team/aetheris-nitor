/**
 * Con la sustitución de Leaflet por mapas vectoriales SVG nativos en EPI-Aetheris,
 * la rueda del ratón desplaza la página de manera completamente natural y fluida.
 * No hay secuestro de scroll, interceptación de rueda ni necesidad de pistas
 * modales de advertencia.
 *
 * Este módulo y sus funciones se mantienen como no-op seguro para garantizar
 * compatibilidad hacia atrás con cualquier invocación residual.
 */

export function esPlataformaMac(): boolean {
  return /Mac|iPhone|iPad/.test(navigator.userAgent);
}

export function protegerScrollMapa(_contenedor?: HTMLElement): void {
  void _contenedor;
  // En mapas vectoriales SVG el scroll del navegador funciona de forma 100% nativa.
}
