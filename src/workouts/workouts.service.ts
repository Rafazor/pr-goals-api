import { Injectable } from '@nestjs/common';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Workout, WorkoutDocument } from './schemas/exercise.schema';

@Injectable()
export class WorkoutsService {
  constructor(
    @InjectModel(Workout.name) private workoutModel: Model<WorkoutDocument>,
  ) {}
  create(createWorkoutDto: CreateWorkoutDto) {
    return this.workoutModel.create(createWorkoutDto);
  }

  findAll() {
    return this.workoutModel.find().exec();
  }

  findOne(id: number) {
    return this.workoutModel.findById(id).exec();
  }

  update(id: string, updateWorkoutDto: UpdateWorkoutDto) {
    return this.workoutModel.findByIdAndUpdate(id, updateWorkoutDto).exec();
  }

  remove(id: string) {
    return this.workoutModel.findByIdAndDelete(id).exec();
  }
}
