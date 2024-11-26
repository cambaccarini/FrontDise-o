import React from "react";
import { Routes, Route, Link } from 'react-router-dom'; 
import TablaRequerimientos from "./TablaRequerimientos";
import OtraPagina from "./OtraPagina";

function App() {
  return (
      <div>
        <nav>
          <ul>
            <li>
            <Link to="/tabla-requerimientos">Tabla de Requerimientos</Link>
            </li>
            <li>
            <Link to="/otra-pagina">Otra Página</Link>
            </li>
          </ul>
        </nav>

        <Routes>
        <Route path="/tabla-requerimientos" element={<TablaRequerimientos />} />
        <Route path="/otra-pagina" element={<OtraPagina />} />
      </Routes>
      </div>
  );
}

export default App;