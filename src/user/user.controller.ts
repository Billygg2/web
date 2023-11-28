import { Controller, Post, Patch, Get,Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUsuerdto } from './dto/create-user.dto';
import { UpdateUsuerdto } from './dto/update-user.dto';


@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

  @Post()
  createUser(@Body() newUser: CreateUsuerdto) {
    return this.userService.createUser(newUser);
  }

  @Get(':id_usuario')
  getUserById(@Param('id_usuario') id: number) {
    return this.userService.getUserById(id);
  }

  @Get()
  getUserList() {
    return this.userService.getUsersList();
  }

  @Delete(':id_usuario')
  deleteUser(@Param('id_usuario') id: number) {
    return this.userService.deleteUser(id);
  }

  @Patch(':id_usuario')
  updateUser(@Param('id_usuario') id: number, @Body() usuario: UpdateUsuerdto) {
    return this.userService.updateUser(id, usuario);
  }
}
