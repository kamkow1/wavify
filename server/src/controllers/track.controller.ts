import { Controller, Get } from '@nestjs/common';
import { User } from 'src/models/user/user.interface';
import { TrackService } from 'src/services/track.service';

@Controller('track')
export class TrackController {
    constructor(
        private trackService: TrackService
    ) {}

    @Get('get-all')
    getAll(): Promise<User[]> {
        return this.trackService.findAllTracks();
    }
}
