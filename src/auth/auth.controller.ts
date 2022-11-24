import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
    constructor(private jwtService: JwtService) {}

    @Get()
    @UseGuards(AuthGuard('github'))
    async login() {}

    @Get('callback')
    @UseGuards(AuthGuard('github'))
    async authCallback(@Req() req) {
        const user = req.user;
        const payload = { sub: user.id, username: user.username };
        return { accessToken: this.jwtService.sign(payload) };
    }
}