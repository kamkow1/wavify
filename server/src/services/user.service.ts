import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/models/user.entity';
import { User } from 'src/models/user.interface';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {}

    registerUser(user: User): Promise<User> {
        return this.userRepository.save(user);
    }

    findOne(condition: object): Promise<User> {
        return this.userRepository.findOne({ 
            where: condition
        });
    }
}