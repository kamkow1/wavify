import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { UserEntity } from 'src/models/user.entity';
import { User } from 'src/models/user.interface';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
) {}

    registerUser(user: User): Observable<User> {
        return from(this.userRepository.save(user));
    }
}