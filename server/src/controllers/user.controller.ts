import { BadRequestException, Body, Controller, Get, Headers, Post, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/models/user.interface';
import { UserService } from '../services/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) {}

    @Post('register')
    async register(@Body() user: User): Promise<User> {
        user.password = await bcrypt.hash(user.password, 10);

        return this.userService.registerUser(user);
    }

    @Post('login')
    async login(
        @Body('login') login: string, 
        @Body('password') password: string    
    ): Promise<object> {
        const user = await this.userService.findOne({ login: login });

        if (!user) throw new BadRequestException('invalid credentials');

        if (!await bcrypt.compare(password, user.password)) throw new BadRequestException('invalid credentials');

        const jwt = await this.jwtService.signAsync({ id: user.id });

        return { token: jwt };
    }

    @Get('get-profile-info')
    async getProfileInfo(@Headers() headers: Headers) {
        if (headers['authorization'] === undefined) throw new UnauthorizedException();

        const token = headers['authorization'].replace('Bearer ', '');

        const data = await this.jwtService.verifyAsync(token);

        if(!data) throw new UnauthorizedException();

        const user = await this.userService.findOne({ id: data['id'] });

        const { password, ...result } = user;

        return result;
    }
}
