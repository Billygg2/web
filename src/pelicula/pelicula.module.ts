import { Module } from '@nestjs/common';
import { PeliculaController } from './pelicula.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeliculaEntity } from './pelicula.entity';
import { PeliculaService } from './pelicula.service';

@Module({
  imports: [TypeOrmModule.forFeature([PeliculaEntity])],
  controllers: [PeliculaController],
  providers: [PeliculaService],
})
export class PeliculaModule {}
