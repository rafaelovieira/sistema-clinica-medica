import React from 'react'
import { useState } from "react"
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"

const CadastrarPaciente = () => {

    const [nome, setNome] = useState("")
    const [dataNascimento, setDataNascimento] = useState("")
    const [cpf, setCpf] = useState("")
    const [telefone, setTelefone] = useState("")
    const [email, setEmail] = useState("")

  return (
    <Container>
    <div>
        
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0 text-white">
          <i className="bi bi-person-circle me-2"></i>
          Novo Paciente
        </h2>
      </div>
      <Card className="shadow-sm border-0">
        <Card.Body className="p-4">
          <Form>
            <Row>
              <Col md={8}>
                <Form.Group className="mb-3">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Data Nascimento</Form.Label>
                  <Form.Control
                    type="text"
                    value={dataNascimento}
                    onChange={(e) => setDataNascimento(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <Form.Group className="mb-3">
                  <Form.Label>CPF</Form.Label>
                  <Form.Control
                    type="text"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-3">
                  <Form.Label>Telefone</Form.Label>
                  <Form.Control
                    type="text"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <div className="d-flex gap-2 mt-4">
              <Button type="submit" variant="dark">
                <i className="bi bi-check-lg me-2"></i>
                Salvar
              </Button>
              <Button 
                variant="outline-secondary"
                onClick={() => navigate("/pacientes")}
              >
                <i className="bi bi-x-lg me-2"></i>
                Cancelar
              </Button>
            </div>

          </Form>
        </Card.Body>
      </Card>

    </div>
    </Container>
  )
}

export default CadastrarPaciente