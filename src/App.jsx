import React from "react";
import Header from "./Components/Header";
import Inicio from "./Components/Inicio";
// instalar o React router: npm install react-router-dom
// importar as funcionalidades do React router:
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Inicio/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App