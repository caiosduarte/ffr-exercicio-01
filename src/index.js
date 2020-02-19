import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Cabecalho } from "./Cabecalho";
import { Menu } from "./Menu";
import { Artigo } from "./Artigo";
import { Sidebar } from "./Sidebar"

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

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

