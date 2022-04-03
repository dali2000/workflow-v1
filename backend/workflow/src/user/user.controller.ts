/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { userDTO } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor (private UserService: UserService) {

    }
    @Get('users')  // http://localhost:3000/user
    getUsers(){
        return this.UserService.showAll();
    }
    @Post('addUser')         // http://localhost:3000/user
    addUser(@Body() data:userDTO){
        return this.UserService.create(data);
    }
    @Get('getUser/:id')       // http://localhost:3000/user/getUser/1
    getUser(@Param('id') id:string){
        return this.UserService.showOne(id);
    }
    @Put('updateUser/:id')      // http://localhost:3000/user/updateUser/1
    updateUser(@Param('id') id:string, @Body() data:Partial<userDTO>){
        return this.UserService.update(id, data);
    }
    @Delete('deleteUser/:id')    // http://localhost:3000/user/deleteUser/1
    deleteUser(@Param('id') id:string){
        return this.UserService.destroy(id);
    }
}
