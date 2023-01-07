import { Module } from '@nestjs/common';
import { RoutinesModule } from './routines/routines.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ExercisesModule } from './exercises/exercises.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/pr-local'),
    RoutinesModule,
    UsersModule,
    ExercisesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
