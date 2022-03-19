import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TrackEntity } from 'src/models/track/track.entity';
import { Track } from 'src/models/track/track.interface';
import { Repository } from 'typeorm';

@Injectable()
export class TrackService {
    constructor(
        @InjectRepository(TrackEntity)
        private readonly trackRepository: Repository<TrackEntity>
    ) {}

    createTrack(track: Track): Promise<Track> {
        return this.trackRepository.save(track);
    }

    findAllTracks(): Promise<Track[]> {
        return this.trackRepository.find();
    }
}
