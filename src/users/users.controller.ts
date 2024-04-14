import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'MANAGER' | 'EMPLOYEE' | 'ADMIN') {
    return [];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post()
  create(@Body() user: { name: string; age: number }) {
    return user;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() userUpdate: { name: string; age: number },
  ) {
    return { id, ...userUpdate };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return { id };
  }
}
