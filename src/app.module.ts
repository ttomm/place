import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigPathsResolver } from './core/config/config-paths-resolver';

const configPaths = new ConfigPathsResolver().get(process.env.NODE_ENV);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: configPaths,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
