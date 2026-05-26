// runtime/theme-registry.ts

const themes = new Map();

export function registerTheme(
  name: string,
  theme: any,
) {
  themes.set(name, theme);
}

export function getTheme(
  name: string,
) {
  return themes.get(name);
}