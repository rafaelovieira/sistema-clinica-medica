import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Card, Form, Row, Col, Button } from 'react-bootstrap'
import axios from 'axios'

const EditarMedico = () => {

  const navigate = useNavigate()
    
    const { id } = useParams()

    const [nome, setNome] = useState("")
    const [especialidade, setEspecialidade] = useState("")
    const [crm, setCrm] = useState("")
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    

    useEffect(() => {
        axios.get(`http://localhost:3000/medicos/${id}`)
        .then(response => {
            setNome(response.data.nome)
            setEspecialidade(response.data.especialidade)
            setCrm(response.data.crm)
            setTelefone(response.data.telefone)
            setEmail(response.data.email)
        })
        .catch(error => console.error("Erro ao carregar médico: ", error))
    }, [id])

    const atualizarMedico = (e) => {
        e.preventDefault()

        const medicoAtualizado = {
            nome,
            especialidade,
            crm,
            telefone,
            email
        }

        axios.put(`http://localhost:3000/medicos/${id}`, medicoAtualizado)
        .then(() => navigate("/medicos?msg=editado"))
        .catch(error => console.error("Erro ao atualizar médico: ", error))
    }

  return (
    <div>
        <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="mb-0 text-white">
                <i className="bi bi-building me-2"></i>
                Editar Médico
            </h2>
        </div>
        
        <Card className="shadow-sm border-0">
            <Card.Body className="p-4">
                <Form onSubmit={atualizarMedico}>
                  <Row>
                    <Col md={6}>
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
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Especialidade</Form.Label>
                        <Form.Control
                          type="text"
                          value={especialidade}
                          onChange={(e) => setEspecialidade(e.target.value)}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={3}>
                      <Form.Group className="mb-3">
                        <Form.Label>CRM</Form.Label>
                        <Form.Control
                          type="text"
                          value={crm}
                          onChange={(e) => setCrm(e.target.value)}
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
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control
                          type="email"
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
                      Atualizar
                    </Button>
                    <Button variant="outline-secondary" onClick={() => navigate("/medicos")}>
                      <i className="bi bi-x-lg me-2"></i>
                      Cancelar
                    </Button>
                  </div>

                </Form>
            </Card.Body>
        </Card>
        
    </div>
  )
}

export default EditarMedico