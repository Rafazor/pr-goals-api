import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoutinesModule } from './routines/routines.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/pr-local'),
    RoutinesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
