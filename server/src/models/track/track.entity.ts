import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "../user/user.entity";
import { User } from "../user/user.interface";

@Entity('tracks')
export class TrackEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'track_name' })
    trackName: string;

    @Column({ name: 'track_desc' })
    trackDesc: string;

    @ManyToOne(type => UserEntity, user => user.tracks)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column({ name: 'thumbnail_url' })
    thumbnailUrl: string;

    @Column()
    likes: number;

    @Column()
    dislikes: number;

}