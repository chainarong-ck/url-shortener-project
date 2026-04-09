export type ThemeMode = "light" | "dark" | "auto";

export const THEME_STORAGE_KEY = "shortthai-theme";

export const THEME_SCRIPT = `
  (() => {
    const storageKey = "${THEME_STORAGE_KEY}";
    const root = document.documentElement;
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const isThemeMode = (value) =>
      value === "light" || value === "dark" || value === "auto";

    const getSavedTheme = () => {
      const saved = window.localStorage.getItem(storageKey);
      return isThemeMode(saved) ? saved : "auto";
    };

    const applyTheme = (mode) => {
      const resolvedTheme = mode === "auto" ? (media.matches ? "dark" : "light") : mode;
      root.dataset.themeMode = mode;
      root.dataset.theme = resolvedTheme;
      root.style.colorScheme = resolvedTheme;
    };

    applyTheme(getSavedTheme());
  })();
`;
