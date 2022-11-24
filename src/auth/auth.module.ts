import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { GHStrategy, JwtStrategy } from './github.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [PassportModule, 
    JwtModule.register({
      secret: 'secret',
      signOptions: {
        expiresIn: 3600,
      }
    }),
    ConfigModule],
  providers: [GHStrategy, JwtStrategy],
  exports: [GHStrategy, JwtModule],
  controllers: [AuthController]
})
export class AuthModule {}
