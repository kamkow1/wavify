import { Body, Controller, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { User } from 'src/models/user.interface';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    register(@Body() user: User): Observable<User> {
        return this.userService.registerUser(user);
    }
}
