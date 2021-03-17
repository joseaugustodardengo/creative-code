import React from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiMap } from 'react-icons/fi';
import { Container } from './styles';

const Sidebar: React.FC = () => {
  return (
    <Container>
      {/* <h1>Sidebar</h1> */}
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

    </Container>
  )
}

export default Sidebar;