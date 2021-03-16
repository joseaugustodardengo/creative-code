import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Content } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <Content>
        <form>
          <h1>Faça seu logon</h1>

          <Input name="email" icon={FiMail} type="email" placeholder="Digite seu email" />
          <Input name="senha" icon={FiLock} type="password" placeholder="Digite sua senha" />

          <Button type="submit">Entrar</Button>
          <a href="forgot-password">Esqueci a senha</a>
        </form>

        <a href="login">
          <FiLogIn />
          Criar conta
        </a>

      </Content>
    </Container>
  )
}

export default Login;