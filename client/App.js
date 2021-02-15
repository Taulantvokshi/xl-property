import React from 'react';
import './sass/animation.scss';
import './sass/base.scss';
import './sass/reusable_css.scss';

import './sass/main.scss';
import { Header, Footer, Routes } from './exports';
const App = () => {
  return (
    <div className="main">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
