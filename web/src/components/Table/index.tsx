import React from 'react'
import { Container } from './styles'

export interface UsuarioResponseProps {
  nome: string,
  telefone: string,
  email: string,
  idade: number,
  peso: string,
  etnia: string,
}

export interface EnderecoResponseProps {
  usuario: UsuarioResponseProps;
  endereco: string;
  numero: number;
  complemento: string;
  cep: string;
  cidade: string;
  estado: string;
}

interface Props {
  cabecalho: string[];
  tableData: Array<UsuarioResponseProps>;
  title: string;
}

const Table: React.FC<Props> = ({ cabecalho, tableData, title }) => {
  const data = tableData.map((dados) => {

    if (title == 'Usuários') {
      return (
        <tr>
          <td>{dados.nome}</td>
          <td>{dados.telefone}</td>
          <td>{dados.email}</td>
          <td>{dados.idade}</td>
          <td>{dados.peso}</td>
          <td>{dados.etnia}</td>
          <td>
            <a href="">Editar</a>
            <a href="">Excluir</a>
          </td>
        </tr>
      )
    } else {
      // return (
      //   <tr>
      //      <td>{dados.usuario}</td>
      //     <td>{dados.endereco}</td>
      //     <td>{dados.numero}</td>
      //     <td>{dados.complemento}</td>
      //     <td>{dados.cep}</td>
      //     <td>{dados.cidade}</td> 
      //     <td>{dados.estado}</td>
      //     <td>
      //       <a href="">Editar</a>
      //       <a href="">Excluir</a>
      //     </td>
      //   </tr>
      // )
    }

  })
  // const data = tableData.map((row, index) => {
  //   let rowData: { key: string; val: string | number }[] = []

  //   Object.entries(row).forEach((data, i) => {
  //     rowData.push({
  //       key: cabecalho[i],
  //       val: data[1]
  //     })
  //   })

  //   return (
  //     <tr key={index}>
  //       {rowData.map((data, index) =>
  //         <td key={index} data-heading={data.key}>
  //           {data.val}
  //         </td>)
  //       }
  //     </tr>
  //   )
  // })

  return (
    <>
      <h1>{title}</h1>
      <Container>
        <thead>
          <tr>
            {cabecalho.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data}
        </tbody>
      </Container>

    </>
  )
}

export default Table;