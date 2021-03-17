import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiMail, FiLock, FiUser, FiPhone } from 'react-icons/fi';
import { Form } from '@unform/web';
import api from '../../services/api';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { Container, Content } from './styles';
import Checkbox from '../../components/Checkbox';
interface RegistrarFormdata {
  nome: string;
  telefone: string;
  email: string;
  senha: string;
  idade: number;
  peso: number;
  etnia: string;
  role: true | false;
}

const Registrar: React.FC = () => {
  const history = useHistory();

  const handleSubmit = useCallback(async (data: RegistrarFormdata) => {
    let role

    if (data.role == true) {
      role = 'admin'
    } else {
      role = 'basico'
    }

    const dados = {
      nome: data.nome,
      telefone: data.telefone,
      email: data.email,
      senha: data.senha,
      idade: data.idade,
      peso: data.peso,
      etnia: data.etnia,
      role
    }

    await api.post('/usuarios', dados)
    history.push('/')
  }, [])

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <h1>Se cadastre</h1>

          <Input name="nome" icon={FiUser} placeholder="Digite seu nome" />
          <Input name="telefone" icon={FiPhone} placeholder="Telefone" />
          <Input name="email" icon={FiMail} placeholder="Digite seu email" />
          <Input name="senha" icon={FiLock} type="password" placeholder="Digite sua senha" />
          <Input name="idade" icon={FiUser} placeholder="Digite sua idade" />
          <Input name="peso" icon={FiUser} placeholder="Digite seu peso" />

          <Select name="etnia" label="Selecione a etnia">
            <option value="branco">Branco</option>
            <option value="negro">Negro</option>
            <option value="indigena">Indigena</option>
            <option value="pardo">Pardo</option>
          </Select>

          <Checkbox name="role" value="admin" label="Admin" />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <Link to="/">
          <FiArrowLeft />
          Voltar para logon
        </Link>

      </Content>
    </Container>
  )
}

export default Registrar;