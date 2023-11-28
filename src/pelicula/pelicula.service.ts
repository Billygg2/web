import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PeliculaEntity } from './pelicula.entity';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';
import { Repository } from 'typeorm';
import { PaginationDto } from './dto/pagination_pelicula.dto';

@Injectable()
export class PeliculaService {
    constructor(
        @InjectRepository(PeliculaEntity)
        private readonly peliculaRepository: Repository<PeliculaEntity>,
      ) {}
    

      async getPaginacion({ limit, offset }: PaginationDto) {
        return await this.peliculaRepository.find({
          relations: ['user'],
          skip: offset,
          take: limit,
        });
      }
    
      async createPelicula(pelicula: CreatePeliculaDto) {
        const { titulo } = pelicula;
        const exists = await this.peliculaRepository.findOne({
          where: [{ titulo: titulo }],
        });
        if (exists)
          throw new BadRequestException(new Error('Película ya registrada'));
    
        const newPelicula = this.peliculaRepository.create(pelicula);
        return await this.peliculaRepository.save(newPelicula);
      }
    
      async getPeliculaById(id_pelicula: number) {
        return await this.peliculaRepository.findOne({
          where: {
            id_pelicula,
          },
        });
      }
    
      async deletePelicula(id_pelicula: number) {
        return await this.peliculaRepository.delete({ id_pelicula });
      }
    
      async updatePelicula(id_pelicula: number, pelicula: UpdatePeliculaDto) {
        return await this.peliculaRepository.update({ id_pelicula }, pelicula);
      }
}
