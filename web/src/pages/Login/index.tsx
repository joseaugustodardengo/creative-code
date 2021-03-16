import { FiLogIn } from 'react-icons/fi';
import { Container, Content } from './styles';

export function Login() {
  return (
    <Container>
      <Content>
        <form>
          <h1>Faça seu logon</h1>

          <input type="email" name="email" placeholder="Digite seu email" />
          <input type="password" name="senha" placeholder="Digite sua senha" />

          <button className="button" type="submit">Entrar</button>
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