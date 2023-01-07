import { Injectable } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Exercise, ExerciseDocument } from './schemas/exercise.schema';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectModel(Exercise.name) private exerciseModel: Model<ExerciseDocument>,
  ) {}
  create(createExerciseDto: CreateExerciseDto) {
    return this.exerciseModel.create(createExerciseDto);
  }

  findAll() {
    return this.exerciseModel.find().exec();
  }

  findOne(id: string) {
    return this.exerciseModel.findById(id).exec();
  }

  update(id: string, updateExerciseDto: UpdateExerciseDto) {
    return this.exerciseModel.findByIdAndUpdate(id, updateExerciseDto).exec();
  }

  remove(id: string) {
    return this.exerciseModel.findByIdAndDelete(id).exec();
  }
}
