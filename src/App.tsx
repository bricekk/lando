import React from 'react';

import ThemeProvider from './utils/themeProvider/ThemePovider';

import { Navbar, Brand } from './components';
import { Welcome, Features, Headline, Steps, Testimonials, Quote } from './containers';
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
        <Steps />
        <Testimonials />
        <Quote />
      </div>
    </ThemeProvider>
  );
}

export default App;
