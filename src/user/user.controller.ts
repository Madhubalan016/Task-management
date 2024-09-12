import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}
  logger = new Logger(UserController.name);

  @Get(':id')
  @UseGuards(JwtGuard)
  findOne(@Param('id') id: number) {
    this.logger.debug('get the user by id');
    return this.userService.findOne(id);
  }

  @Get()
  @UseGuards(JwtGuard)
  find(){
    this.logger.debug('get the All Users');
    return this.userService.find();
  }

  @Post('/register')
  create(@Body() createUserDto: CreateUserDto) {
    this.logger.debug('register the new user');
    return this.userService.create(createUserDto);
  }
  
  @Put('/update/:id')
  @UseGuards(JwtGuard)
  update(@Param('id') id: number,@Body() createUserDto: CreateUserDto){
    this.logger.debug('update the user details by id')
    return this.userService.update(id, createUserDto)
  }

  @Delete('/delete/:id')
  @UseGuards(JwtGuard)
  delete(@Param('id') id: number){
    this.logger.debug('Delete the user by id');
   return this.userService.delete(id);
  }
}
