import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser, FiPhone } from 'react-icons/fi';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Content } from './styles';

const Registrar: React.FC = () => {
  return (
    <Container>
      <Content>
        <form>
          <h1>Se cadastre</h1>

          <Input name="nome" icon={FiUser} type="text" placeholder="Digite seu nome" />
          <Input name="telefone" icon={FiPhone} type="tel" placeholder="Telefone" />
          <Input name="email" icon={FiMail} type="email" placeholder="Digite seu email" />
          <Input name="senha" icon={FiLock} type="password" placeholder="Digite sua senha" />
          <Input name="idade" icon={FiUser} type="number" placeholder="Digite sua idade" />
          <Input name="peso" icon={FiUser} type="text" placeholder="Digite seu peso" />
          <select name="etnia" id="etnia">
            <option value="">Selecione a etnia</option>
            <option value="branco">Branco</option>
            <option value="negro">Negro</option>
            <option value="indigena">Indigena</option>
            <option value="pardo">Pardo</option>
          </select>

          <Button type="submit">Cadastrar</Button>
        </form>

        <a href="login">
          <FiArrowLeft />
          Voltar para logon
        </a>

      </Content>
    </Container>
  )
}

export default Registrar;