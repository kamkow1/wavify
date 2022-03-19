import { User } from 'src/models/user/user.interface';
import { UserService } from '../services/user.service';
import { JwtService } from '@nestjs/jwt';
export declare class UserController {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    register(user: User): Promise<User>;
    login(login: string, password: string): Promise<object>;
    getProfileInfo(headers: Headers): Promise<{
        id?: number;
        login?: string;
        email?: string;
        joined_at?: import("typeorm").Timestamp;
    }>;
}
