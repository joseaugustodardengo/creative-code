import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('enderecos')
class Endereco {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  endereco: string;

  @Column('int')
  numero: number;

  @Column()
  complemento: string;

  @Column()
  cep: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

}

export default Endereco;