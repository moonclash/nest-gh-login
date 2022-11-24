import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GHStrategy, JwtStrategy } from './github.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [PassportModule, 
    JwtModule.registerAsync({
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
          secret: configService.get<string>('JWT_SECRET'),
        }),
        inject: [ConfigService],
      }),
    ConfigModule],
  providers: [GHStrategy, JwtStrategy],
  exports: [GHStrategy, JwtModule],
  controllers: [AuthController]
})
export class AuthModule {}
