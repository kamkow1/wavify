import { Strategy } from "passport-jwt";
import { AuthService } from "src/services/auth.service";
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(username: string, password: string): Promise<{
        id: number;
        login: string;
        email: string;
        joined_at: import("typeorm").Timestamp;
    }>;
}
export {};
