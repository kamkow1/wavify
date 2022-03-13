import { Timestamp } from "typeorm";
export interface User {
    id?: number;
    login?: string;
    password?: string;
    email?: string;
    joined_at?: Timestamp;
}
