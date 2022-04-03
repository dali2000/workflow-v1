import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { userDTO } from './user.dto';
import { UserService } from './user.service';
import * as bcrypt  from 'bcrypt';
import { Response } from 'express';
import { User } from './user.entity';
@Controller('user')
export class UserController {
    constructor (private UserService: UserService) {

    }
   
    @Get('users')  // http://localhost:3000/user
    getUsers(){
        return this.UserService.showAll();
    }
    // @Post('addUser')         // http://localhost:3000/user
    // addUser(@Body() data:userDTO){
    //     return this.UserService.create(data);
    // }
    @Post('addUser')         // http://localhost:3000/user
    async addUser(@Body() data:userDTO,@Res () res: Response){

        const users = await this.UserService.showOneByEmail(data.Email);
        if(users){
            res.status(400);
            res.json({
                message: 'User Already Exists'
            });
        }
        else{   
                    
        const HashPassword = await bcrypt.hash(data.password, 10);
        data.password = HashPassword;
        const user = await this.UserService.create(data);
        res.status(200);
        res.json({
            status: '200',
            message: 'User Created',
            data: user
        });
        }


        
        
        return res;
    }
    @Get('getUser/:id')       // http://localhost:3000/user/getUser/1
    getUser(@Param('id') id:string){
        return this.UserService.showOne(id);
    }
    @Get('getUserEmail')       // http://localhost:3000/user/getUser/1
    getUserByEmail(@Body() data:userDTO){
        return this.UserService.showOneByEmail(data.Email);
    }
    // @Put('updateUser/:id')      // http://localhost:3000/user/updateUser/1
    // updateUser(@Param('id') id:string, @Body() data:Partial<userDTO>){
    //     return this.UserService.update(id, data);
    // }
    @Delete('deleteUser/:id')    // http://localhost:3000/user/deleteUser/1
    deleteUser(@Param('id') id:string,@Res () res: Response){
        {   
            this.UserService.destroy(id);
            if(this.UserService.destroy(id)){
                res.status(200);
                res.json({
                    status: '200',
                    message: 'User Deleted'
                });
            }else{
                res.status(404);
                res.json({
                    message: 'User Not Found'
                });
            }
            
            
            return res;
            // return this.UserService.destroy(id);
            

        }
    }
    
}
