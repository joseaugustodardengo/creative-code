import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiMail, FiLock, FiUser, FiPhone } from 'react-icons/fi';
import { Form } from '@unform/web';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { Container, Content } from './styles';

const Registrar: React.FC = () => {

  function handleSubmit(data: object): void {
    console.log(data)
  }

  // const handleSubmit = useCallback(async (data: object) => {
  //   try {
  //     const schema = Yup.object().shape({
  //       nome: Yup.string().required('Nome obrigatório'),
  //       telefone: Yup.string().required('Telefone obrigatório'),
  //       email: Yup.string().required('E-mail obrigatório').email('Digite um email válido'),
  //       senha: Yup.string().min(6, 'No mínimo 6 dígitos'),
  //       idade: Yup.number().required('Idade obrigatória'),
  //       peso: Yup.string().required('Peso obrigatório'),
  //       etnia: Yup.string().required('Etnia obrigatória')
  //     })

  //     await schema.validate(data, {
  //       abortEarly: false
  //     });

  //   } catch (error) {
  //     formRef.current?.setErrors({
  //       nome: 'Nome obrigatorio'
  //     })
  //   }
  // }, [])


  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <h1>Se cadastre</h1>

          <Input name="nome" icon={FiUser} placeholder="Digite seu nome" />
          <Input name="telefone" icon={FiPhone} placeholder="Telefone" />
          <Input name="email" icon={FiMail} placeholder="Digite seu email" />
          <Input name="senha" icon={FiLock} type="password" placeholder="Digite sua senha" />
          <Input name="idade" icon={FiUser} placeholder="Digite sua idade" />
          <Input name="peso" icon={FiUser} placeholder="Digite seu peso" />

          <Select name="etnia" label="Selecione a etnia">
            <option value="branco">Branco</option>
            <option value="negro">Negro</option>
            <option value="indigena">Indigena</option>
            <option value="pardo">Pardo</option>
          </Select>

          <Button type="submit">Cadastrar</Button>
        </Form>

        <Link to="/">
          <FiArrowLeft />
          Voltar para logon
        </Link>

      </Content>
    </Container>
  )
}

export default Registrar;