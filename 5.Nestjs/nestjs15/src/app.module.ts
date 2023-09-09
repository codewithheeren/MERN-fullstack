import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

// isGlobal- true makes configuration global,comman across all modules. 
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    // envFilePath: ".prod.env"   //by default config file be .env file 
    // envFilePath: ".local.env"   //by default config file be .env file 
  }),UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
