import React from 'react';

import ThemeProvider from './utils/themeProvider/ThemePovider';

import { Navbar, Brand, Headline } from './components';
import { Welcome, Features } from './containers';
import './App.css';
import './media.css';

function App() {
  return (

    <ThemeProvider>
      <Navbar />
      <div className='section__margin'>
        <Welcome />
        <Brand />
        <Headline />
        <Features />
      </div>
    </ThemeProvider>
  );
}

export default App;
