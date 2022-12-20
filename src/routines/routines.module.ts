import { Module } from '@nestjs/common';
import { RoutinesService } from './routines.service';
import { RoutinesController } from './routines.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Routine, RoutineSchema } from './schemas/routine.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Routine.name, schema: RoutineSchema }]),
  ],
  controllers: [RoutinesController],
  providers: [RoutinesService],
})
export class RoutinesModule {}
