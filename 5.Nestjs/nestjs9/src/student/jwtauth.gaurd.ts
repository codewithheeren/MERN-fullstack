import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        // const age = request.body.age;
        const token = request.headers.authorization;
        const hardcodedToken = '#hardcoded@token#';

        if (!token || token !== hardcodedToken) {
            throw new UnauthorizedException('Invalid or missing JWT token');
        }

        return true;
    }
}
