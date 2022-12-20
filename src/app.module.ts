import { Module } from '@nestjs/common';
import { RoutinesModule } from './routines/routines.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/pr-local'),
    RoutinesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
