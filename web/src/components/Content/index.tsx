import React, { useEffect, useState } from 'react';
import Table, { UsuarioResponseProps, EnderecoResponseProps } from '../Table';
import Button from '../Button'
import api from '../../services/api';

import { Container } from './styles';

const dadosUsuario: object[] = [
  {
    nome: "Guto",
    telefone: "997495504",
    email: "jfrancodardengo@gmail.com",
    idade: 25,
    peso: "72.5",
    etnia: "pardo"
  }
]

const dadosEndereco: object[] = [
  {
    usuario: "Guto",
    endereco: "Rua João 1",
    numero: 302,
    complemento: 'anexo A',
    cep: "29709205",
    cidade: "Colatina",
    estado: "ES"
  }
]

const Content: React.FC = () => {
  const [usuarios, setUsuarios] = useState<UsuarioResponseProps[]>([]);
  const [enderecos, setEnderecos] = useState<EnderecoResponseProps[]>([]);

  useEffect(() => {
    api.get<UsuarioResponseProps[]>('usuarios').then(response => {
      setUsuarios(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<EnderecoResponseProps[]>('enderecos').then(response => {
      setEnderecos(response.data);
    });
  }, []);


  return (
    <Container>
      <h1>Content</h1>

      <header>
        <Button>CRIAR</Button>
      </header>

      <main>
        <div>
          <Table
            title="Usuários"
            cabecalho={['Nome', 'Telefone', 'Email', 'Idade', 'Peso', 'Etnia']}
            tableData={usuarios}
          />

          {/* <Table
            title="Endereços"
            cabecalho={['Usuário', 'Endereço', 'Número', 'Complemento', 'CEP', 'Cidade', 'Estado']}
            tableData={enderecos}
          /> */}
        </div>
      </main>

    </Container>
  )
}

export default Content;