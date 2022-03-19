import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { TrackEntity } from "../track/track.entity";

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

    @OneToMany(type => TrackEntity, track => track.id)
    tracks: TrackEntity[];
}