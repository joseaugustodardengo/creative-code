import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser, FiPhone } from 'react-icons/fi';
import { Form } from '@unform/web';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { Container, Content } from './styles';

const Registrar: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data)
  }

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <h1>Se cadastre</h1>

          <Input name="nome" icon={FiUser} type="text" placeholder="Digite seu nome" />
          <Input name="telefone" icon={FiPhone} type="tel" placeholder="Telefone" />
          <Input name="email" icon={FiMail} type="email" placeholder="Digite seu email" />
          <Input name="senha" icon={FiLock} type="password" placeholder="Digite sua senha" />
          <Input name="idade" icon={FiUser} type="number" placeholder="Digite sua idade" />
          <Input name="peso" icon={FiUser} type="text" placeholder="Digite seu peso" />

          <Select name="etnia" label="Selecione a etnia">
            <option value="branco">Branco</option>
            <option value="negro">Negro</option>
            <option value="indigena">Indigena</option>
            <option value="pardo">Pardo</option>
          </Select>

          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="login">
          <FiArrowLeft />
          Voltar para logon
        </a>

      </Content>
    </Container>
  )
}

export default Registrar;