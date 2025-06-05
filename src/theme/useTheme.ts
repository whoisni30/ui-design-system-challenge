import { useEffect } from 'react';
import { darkTheme, lightTheme, Theme } from './themes';

export const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  Object.entries(theme).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
};

export const useTheme = (mode: 'light' | 'dark') => {
  useEffect(() => {
    applyTheme(mode === 'light' ? lightTheme : darkTheme);
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);
};
