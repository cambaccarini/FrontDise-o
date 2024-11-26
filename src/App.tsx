import React from "react";
import { Routes, Route, Link } from 'react-router-dom'; 
import TablaRequerimientos from "./TablaRequerimientos";
import OtraPagina from "./OtraPagina";

function App() {
  return (
      <div>
      <Routes>
         <Route path="/" element={<OtraPagina />} />
         <Route path="/tabla-requerimientos" element={<TablaRequerimientos />} />
      </Routes>
      </div>
  );
}

export default App;