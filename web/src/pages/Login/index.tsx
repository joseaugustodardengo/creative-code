import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Content } from './styles';
import { AuthContext } from '../../context/AuthContext';

interface LoginFormdata {
  email: string;
  senha: string;
}

const Login: React.FC = () => {
  const { logar } = useContext(AuthContext);

  function handleSubmit(data: LoginFormdata): void {
    logar({
      email: data.email,
      senha: data.senha
    })
  }

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <Input name="email" icon={FiMail} type="email" placeholder="Digite seu email" />
          <Input name="senha" icon={FiLock} type="password" placeholder="Digite sua senha" />

          <Button type="submit">Entrar</Button>
        </Form>

        <Link to="registrar">
          <FiLogIn />
          Criar conta
        </Link>

      </Content>
    </Container>
  )
}

export default Login;