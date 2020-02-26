import React from 'react';
import { Cabecalho } from "./Cabecalho";
import { Menu } from "./Menu";
import { Artigo } from "./Artigo";
import { Sidebar } from "./Sidebar"

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Menu />     
      <Artigo />
      <Artigo />
      <Artigo />
      <Sidebar />
    </div>
  );
}

export default App;
