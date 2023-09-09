import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
@Module({
    imports: [],
    controllers: [],
    providers: [],
})
export class UserModule {
// access environment configuration any where in project using inbuild class ConfigService
    constructor(private readonly configService: ConfigService){
        // console.log("USER MODULE - ");
        // console.log(configService.get<Number>("PORT"));
        // console.log(configService.get<Boolean>("LOGGING"));
    }
}
