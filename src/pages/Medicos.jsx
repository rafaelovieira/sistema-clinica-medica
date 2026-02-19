import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'

const Medicos = () => {

    const [medicos, setMedicos] = useState([])

    useEffect(() => {
        carregarMedicos()
    }, [])

    const carregarMedicos = () => {
        axios.get("http://localhost:3000/medicos")
        .then(response => setMedicos(response.data))
        .catch(error => console.error("Erro ao carregar médicos: ", error))
    }

  return (
    <Container className="mt-4">
    <div>

        <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="mb-0 text-white">
                <i className="bi bi-file-person me-2"></i>
                Médicos
            </h2>
            <Button variant="light">
                <i className="bi bi-plus-lg me-2"></i>
                Novo Médico
            </Button>
        </div>

        <Row className="g-4">
            {
                medicos.map(medico => (
                    <Col md={6} lg={4} key={medico.id}>
                        <Card className="h-100 shadow-sm border-0">
                            <Card.Body>
                                <Card.Title>
                                    <i className="bi bi-file-person text-primary me-2"></i>
                                    {medico.nome}
                                </Card.Title>
                                <p className="mb-2">
                                    <small className="text-muted d-block">Especialidade</small>
                                    <i className="bi bi-capsule text-primary me-2"></i>
                                    {medico.especialidade}
                                </p>
                                <p className="mb-2">
                                    <small className="text-muted d-block">CRM</small>
                                    <i className="bi bi-file-medical text-primary me-2"></i>
                                    {medico.crm}
                                </p>
                                <p className="mb-2">
                                    <small className="text-muted d-block">Telefone</small>
                                    <i className="bi bi-telephone text-primary me-2"></i>
                                    {medico.telefone}
                                </p>
                                <p className="mb-2">
                                    <small className="text-muted d-block">E-mail</small>
                                    <i className="bi bi-envelope text-primary me-2"></i>
                                    {medico.email}
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

export default Medicos