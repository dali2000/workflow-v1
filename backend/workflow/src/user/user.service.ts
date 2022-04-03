import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { userDTO } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,

    ){}
    async showAll(){
        return await this.userRepository.find()
    }
    async showOne(id: string){
        return await this.userRepository.findOne({where: {id}});
    }
    async create(data:userDTO){
        const user = await this.userRepository.create(data);
        await this.userRepository.save(user);
        return user;
    }
    async update(id: string, data:Partial<userDTO>){
        await this.userRepository.update(id, data);
        return this.userRepository.findOne(id);
    }
    async destroy(id: string){
        await this.userRepository.delete(id);
        return {deleted: true};
    }
}
