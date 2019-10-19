import React from 'react';
import Menus from './components/menus/index';
import Pinta from './components/pinta/index';
import './App.css';

function App() {
  return (
    <div className="container">
      <Menus />
      <Pinta />
    </div>
  );
}

export default App;
