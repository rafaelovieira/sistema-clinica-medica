import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Inicial from "./pages/Inicial"
import Medicos from "./pages/Medicos"
import CadastrarMedico from "./pages/CadastrarMedico"
import EditarMedico from "./pages/EditarMedico"
import Pacientes from "./pages/Pacientes"
import CadastrarPaciente from "./pages/CadastrarPaciente"
import EditarPaciente from "./pages/EditarPaciente"
import Exames from "./pages/Exames"
import Agenda from "./pages/Agenda"

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', backgroundColor: 'transparent' }}>
        <Navbar/>
        <div className="container py-4">
          <Routes>
            <Route path="/" element={<Inicial/>} />
            <Route path="/medicos" element={<Medicos/>} />
            <Route path="/cadastrar-medico" element={<CadastrarMedico/>} />
            <Route path="/editar-medico/:id" element={<EditarMedico/>} />
            <Route path="/pacientes" element={<Pacientes/>} />
            <Route path="/cadastrar-paciente" element={<CadastrarPaciente/>} />
            <Route path="/editar-paciente/:id" element={<EditarPaciente/>} />
            <Route path="/exames" element={<Exames/>} />
            <Route path="/agenda" element={<Agenda/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App