import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { FiUser, FiMap } from 'react-icons/fi';
import { Container } from './styles';
export interface UsuarioProps {
  nome: string;
  role: string;
}

const Sidebar: React.FC = () => {
  const { usuario, deslogar } = useContext(AuthContext);

  function handleSair() {
    deslogar()
  }

  return (
    <Container>
      <h2>Bem vindo,</h2>
      <span>{usuario.nome}</span>
      <span>{usuario.role}</span>

      <ul>
        <li>
          <Link to="usuarios">
            <FiUser />
            Usuários
          </Link>
        </li>
        <li>
          <Link to="enderecos">
            <FiMap />
              Endereços
          </Link>
        </li>
      </ul>

      <Button onClick={handleSair}>Sair</Button>

    </Container>
  )
}

export default Sidebar;