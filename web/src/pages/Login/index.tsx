import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Content } from './styles';

const Login: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data)
  }

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <Input name="email" icon={FiMail} type="email" placeholder="Digite seu email" />
          <Input name="senha" icon={FiLock} type="password" placeholder="Digite sua senha" />

          <Button type="submit">Entrar</Button>
          <a href="forgot-password">Esqueci a senha</a>
        </Form>

        <a href="login">
          <FiLogIn />
          Criar conta
        </a>

      </Content>
    </Container>
  )
}

export default Login;