import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TrackService } from './services/track.service';
import { TrackModule } from './modules/track.module';
import { TrackController } from './controllers/track.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,

      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '../../client/build/') }),
    TrackModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
