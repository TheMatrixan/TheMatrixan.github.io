enum Themes {
  Dark = 'dark',
  Light = 'light',
}

const ThemeStorageName = 'theme';

const getTheme = (): string => {
  let theme = Themes.Dark;
  if (localStorage.getItem(ThemeStorageName)) {
    if (localStorage.getItem(ThemeStorageName) === Themes.Light) {
      theme = Themes.Light;
    }
  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    theme = Themes.Light;
  }
  return theme;
};

const setTheme = (theme: string): void => localStorage.setItem(ThemeStorageName, theme);

export { Themes, getTheme, setTheme };
