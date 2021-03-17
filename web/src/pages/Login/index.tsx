import React, { useContext } from 'react';
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
  const { usuario, logar } = useContext(AuthContext);
  console.log(usuario)

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