import { Timestamp } from "typeorm";
export declare class UserEntity {
    id: number;
    login: string;
    password: string;
    email: string;
    joined_at: Timestamp;
}
