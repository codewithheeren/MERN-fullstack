import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { PassportLocalStrategy } from './passport.local.strategy';
import { UserModule } from 'src/users/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [PassportModule, UserModule,
        JwtModule.register({
            secret: "key",
            signOptions: { expiresIn: '60s' },
        })
    ],
    controllers: [],
    providers: [
        AuthService, PassportLocalStrategy],
    exports: [AuthService]
})
export class AuthModule { }
