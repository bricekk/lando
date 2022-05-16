import React from 'react';

import ThemeProvider from './utils/themeProvider/ThemePovider';

import { Navbar } from './components';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Navbar/>
    </ThemeProvider>
  );
}

export default App;
