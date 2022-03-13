import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';
export declare class AuthService {
    private jwtService;
    private userService;
    constructor(jwtService: JwtService, userService: UserService);
    validateUserCredentials(login: string, password: string): Promise<{
        id: number;
        login: string;
        email: string;
        joined_at: import("typeorm").Timestamp;
    }>;
    loginWithCredentials(user: any): Promise<{
        access_token: string;
    }>;
}
