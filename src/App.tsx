import React from 'react';

import './App.css';

import ThemeProvider from './utils/themeProvider/ThemePovider';
import ThemeSwitcherBtn from './utils/themeProvider/ThemeSwitcherBtn';

function App() {
  return (
    <ThemeProvider>
      <ThemeSwitcherBtn/>
    </ThemeProvider>
  );
}

export default App;
