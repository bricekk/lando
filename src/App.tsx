import React from 'react';

import ThemeProvider from './utils/themeProvider/ThemePovider';

import { Navbar, Brand } from './components';
import { Welcome } from './containers';
import './App.css';

function App() {
  return (

    <ThemeProvider>
      <Navbar />
      <div className='section__margin'>
        <Welcome />
        <Brand />
      </div>
    </ThemeProvider>
  );
}

export default App;
