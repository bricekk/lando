import React from 'react';

import ThemeProvider from './utils/themeProvider/ThemePovider';

import { Navbar } from './components';
import { Welcome } from './containers';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Navbar/>
      <Welcome/>
    </ThemeProvider>
  );
}

export default App;
