import { UsuarioEntity } from 'src/user/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, JoinTable, JoinColumn, ManyToMany, OneToMany,ManyToOne } from 'typeorm';

@Entity({ name: 'pelicula' })
export class PeliculaEntity {
  @PrimaryGeneratedColumn()
  id_pelicula: number;

  @Column({ type: 'varchar', nullable: false })
  titulo: string;

  @Column({ type: 'varchar', nullable: false })
  director: string;

  @Column({ type: 'varchar', nullable: false })
  genero: string;

  @Column({ type: 'numeric', nullable: false })
  año: number;

  @ManyToOne(() => UsuarioEntity, user => user.peliculas)
  user: UsuarioEntity;

}
