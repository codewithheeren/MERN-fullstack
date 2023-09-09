import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule,ConfigService } from '@nestjs/config';
@Module({
  imports: [
    // 1. making db properties hardcoded
    // TypeOrmModule.forRoot({
    //   type: "postgres", //'mysql',
    //   host: 'localhost',
    //   port: 5432,  //3306
    //   username: 'postgres',
    //   password: 'root',
    //   database: 'Test',
    //   synchronize: true,
    // }),

    // 2. passing db properties from env config file
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: ".local.env",
        // envFilePath: ".prod.env",
      })],
      useFactory: (configService: ConfigService) => ({
        type: "postgres",//'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get<Number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        synchronize: configService.get('DB_SYNC'),
      }),
      inject: [ConfigService],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
