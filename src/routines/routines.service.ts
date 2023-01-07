import { Injectable } from '@nestjs/common';
import { CreateRoutineDto } from './dto/create-routine.dto';
import { UpdateRoutineDto } from './dto/update-routine.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Routine, RoutineDocument } from './schemas/routine.schema';
import { Model } from 'mongoose';

@Injectable()
export class RoutinesService {
  constructor(
    @InjectModel(Routine.name) private routineModel: Model<RoutineDocument>,
  ) {}
  create(createRoutineDto: CreateRoutineDto) {
    const createdRoutine = new this.routineModel(createRoutineDto);
    return createdRoutine.save();
  }

  findAll() {
    return this.routineModel.find().exec();
  }

  findAllByUserId(userId: string) {
    return this.routineModel.find({ userId }).exec();
  }

  findOne(id: string) {
    return this.routineModel.findById(id).exec();
  }

  update(id: string, updateRoutineDto: UpdateRoutineDto) {
    return this.routineModel.findByIdAndUpdate(id, updateRoutineDto).exec();
  }

  remove(id: string) {
    return this.routineModel.findByIdAndDelete(id).exec();
  }
}
