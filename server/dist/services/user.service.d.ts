import { UserEntity } from 'src/models/user.entity';
import { User } from 'src/models/user.interface';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    registerUser(user: User): Promise<User>;
    findOne(condition: object): Promise<User>;
}
