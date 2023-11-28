import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from './user.entity';
import { CreateUsuerdto } from './dto/create-user.dto';
import { UpdateUsuerdto } from './dto/update-user.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly userRepository: Repository<UsuarioEntity>,
      ) {}
    
      async getUsersList() {
        const user = await this.userRepository.find();
        if (!user.length)
          throw new NotFoundException(
            new Error('No existe un listado de usuarios'),
          );
        return user;
      }
    
      async createUser(user: CreateUsuerdto) {
        const { nombre } = user;
        const exists = await this.userRepository.findOne({
          where: [ { nombre: nombre }],
        });
        if (exists) throw new BadRequestException(new Error('User ya registrado'));
    
        const newUser = this.userRepository.create(user);
        return await this.userRepository.save(newUser);
      }
    
      async getUserById(id_usuario: number) {
        return await this.userRepository.findOne({
          where: {
            id_usuario,
          },
        });
      }
    
      async deleteUser(id_usuario: number) {
        return await this.userRepository.delete({ id_usuario });
      }
    
      async updateUser(id_usuario: number, user: UpdateUsuerdto) {
        return await this.userRepository.update({ id_usuario }, user);
      }
}
