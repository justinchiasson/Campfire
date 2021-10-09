import React from 'react';
import { default as lightTheme } from './theme-light.json';

export const ThemeContext = React.createContext({
  theme: lightTheme,
  toggleTheme: () => {},
});
