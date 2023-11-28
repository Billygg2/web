import { Controller, Post, Patch, Get,Delete, Body, Param, Query } from '@nestjs/common';
import { PeliculaService } from './pelicula.service';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';
import { PaginationDto } from './dto/pagination_pelicula.dto';

@Controller('pelicula')
export class PeliculaController {
    constructor(private peliculaService: PeliculaService) {}

    @Post()
    createPelicula(@Body() newPelicula: CreatePeliculaDto) {
      return this.peliculaService.createPelicula(newPelicula);
    }
  
    @Get(':id_pelicula')
    getPeliculaById(@Param('id_pelicula') id: number) {
      return this.peliculaService.getPeliculaById(id);
    }

    @Get()
    getPaginacion(@Query() pagination: PaginationDto) {
      return this.peliculaService.getPaginacion(pagination);
    }
  
    @Delete(':id_pelicula')
    deletePelicula(@Param('id_pelicula') id: number) {
      return this.peliculaService.deletePelicula(id);
    }
  
    @Patch(':id_pelicula')
    updatePelicula(@Param('id_pelicula') id: number, @Body() pelicula: UpdatePeliculaDto) {
      return this.peliculaService.updatePelicula(id, pelicula);
    }
}
