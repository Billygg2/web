import { PeliculaEntity } from 'src/pelicula/pelicula.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable } from 'typeorm';

@Entity({ name: 'user' })
export class UsuarioEntity {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column({ type: 'varchar', nullable: false })
  nombre: string;

  @OneToMany(() => PeliculaEntity, pelicula => pelicula.user)
  peliculas: PeliculaEntity[];
}