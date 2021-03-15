import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum UsuarioRole {
  ADMIN = "admin",
  BASICO = "basico"
}

export enum Etnia {
  BRANCO = "branco",
  NEGRO = "negro",
  INDIGENA = "indigena",
  PARDO = "pardo"
}

@Entity('usuarios')
class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  telefone: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column('int')
  idade: number;

  @Column('decimal')
  peso: number;

  @Column({ type: 'enum', enum: Etnia })
  etnia: Etnia

  @Column({ type: 'enum', enum: UsuarioRole })
  role: UsuarioRole

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export default Usuario;