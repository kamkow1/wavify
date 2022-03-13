import { Observable } from 'rxjs';
import { User } from 'src/models/user.interface';
import { UserService } from '../services/user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    register(user: User): Observable<User>;
}
