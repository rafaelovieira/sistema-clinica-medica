import axios from "axios"
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from "react-bootstrap"

const Pacientes = () => {

    const [pacientes, setPacientes] = useState([])

    useEffect(() => {
        carregarPacientes()
    }, [])

    const carregarPacientes = () => {
        axios.get("http://localhost:3000/pacientes")
        .then(response => setPacientes(response.data))
        .catch(error => console.error("Erro ao carregar pacientes: ", error))
    }

  return (
    <Container>
    <div>

        <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="mb-0 text-white">
                <i className="bi bi-person-circle me-2"></i>
                Pacientes
            </h2>
            <Button variant="light">
                <i className="bi bi-plus-lg me-2"></i>
                Novo Paciente
            </Button>
        </div>

        <Row className="g-4">
            {
                pacientes.map(paciente => (
                    <Col md={6} lg={4} key={paciente.id}>
                        <Card className="h-100 shadow-sm border-0">
                            <Card.Body>
                                <Card.Title>
                                    <i className="bi bi-person-circle text-primary me-2"></i>
                                    {paciente.nome}
                                </Card.Title>
                                <p className="mb-2">
                                    <small className="text-muted d-block">Data Nascimento</small>
                                    <i className="bi bi-calendar2-week text-primary me-2"></i>
                                    {paciente.dataNascimento}
                                </p>
                                <p className="mb-2">
                                    <small className="text-muted d-block">CPF</small>
                                    <i className="bi bi-card-text text-primary me-2"></i>
                                    {paciente.cpf}
                                </p>
                                <p className="mb-2">
                                    <small className="text-muted d-block">Telefone</small>
                                    <i className="bi bi-telephone text-primary me-2"></i>
                                    {paciente.telefone}
                                </p>
                                <p className="mb-2">
                                    <small className="text-muted d-block">E-mail</small>
                                    <i className="bi bi-envelope text-primary me-2"></i>
                                    {paciente.email}
                                </p>
                            </Card.Body>
                            <Card.Footer className="bg-white border-0">
                                <div className="d-flex gap-2">
                                    <Button
                                        variant="outline-secondary"
                                        size="sm"
                                        className="flex-grow-1"
                                    >
                                        <i className="bi bi-pencil me-1"></i>
                                        Editar
                                    </Button>
                                    <Button
                                        variant="outline-danger"
                                        size="sm"
                                        className="flex-grow-1"
                                    >
                                        <i className="bi bi-trash me-1"></i>
                                        Excluir
                                    </Button>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))
            }
        </Row>

    </div>
    </Container>
  )
}

export default Pacientes