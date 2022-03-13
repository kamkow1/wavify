import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    login: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    joined_at: Timestamp;
}