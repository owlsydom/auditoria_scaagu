import React from "react";
import Resumen from "./components/Resumen";
import InyeccionSQL from "./components/InyeccionSQL";
import XSS from "./components/XSS";
import Comandos from "./components/Comandos";
import Matriz from "./components/Matriz";
import Controles from "./components/Controles";
import Activos from "./components/Activos";
import Prompts from "./components/Prompts";
import Recuperacion from "./components/Recuperacion";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Auditoría Banco Andes Capital</h1>
      </header>
      <main className="app-main">
        <Resumen />
        <Matriz />
        <InyeccionSQL />
        <XSS />
        <Comandos />
        <Controles />
        <Activos />
        <Prompts />
        <Recuperacion />
      </main>
    </div>
  );
}

export default App;

