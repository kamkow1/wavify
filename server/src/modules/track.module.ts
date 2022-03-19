import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrackController } from 'src/controllers/track.controller';
import { TrackEntity } from 'src/models/track/track.entity';
import { TrackService } from 'src/services/track.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([TrackEntity])
    ],
    providers: [TrackService],
    controllers: [TrackController]
})
export class TrackModule {}
