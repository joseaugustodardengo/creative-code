import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import Usuario from './Usuario';

@Entity('enderecos')
class Endereco {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  usuario_id: string;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export default Endereco;