import React from 'react'
import { Navbar as BsNavbar, Container, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <BsNavbar expand="lg" bg="dark" variant="dark" className="shadow-sm">
        <Container>
            <BsNavbar.Brand className="fw-bold">
                <i className="bi bi-hospital me-2"></i>
                Clínica Médica
            </BsNavbar.Brand>
            <BsNavbar.Toggle aria-controls="navbarNav" />
                <BsNavbar.Collapse id="navbarNav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">
                            <i className="bi bi-house-door me-1"></i>
                            Início
                        </Nav.Link>
                        <Nav.Link as={Link} to="/medicos">
                            <i className="bi bi-file-person me-1"></i>
                            Médicos
                        </Nav.Link>
                        <Nav.Link as={Link} to="/pacientes">
                            <i className="bi bi-person-circle me-1"></i>
                            Pacientes
                        </Nav.Link>
                        <Nav.Link as={Link} to="/exames">
                            <i className="bi bi-heart-pulse me-1"></i>
                            Exames
                        </Nav.Link>
                        <Nav.Link as={Link} to="/agenda">
                            <i className="bi bi-journal-check me-1"></i>
                            Agenda
                        </Nav.Link>
                    </Nav>
                </BsNavbar.Collapse>
        </Container>
    </BsNavbar>
  )
}

export default Navbar