import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule,ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: ".local.env",
        // envFilePath: ".prod.env",
      })],
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        host: configService.get('DB_HOST'),
        port: +configService.get<Number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        synchronize: configService.get('DB_SYNC'),
        entities: [__dirname+"/**/*.entity{.ts,.js}"],   //scan entity locations for entity file
        logging: true,  // to monitor sql query logs
      }),
      inject: [ConfigService],
    }),UserModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
