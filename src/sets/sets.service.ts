import { Injectable } from '@nestjs/common';
import { CreateSetDto } from './dto/create-set.dto';
import { UpdateSetDto } from './dto/update-set.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SetDocument } from './schemas/set.schema';

@Injectable()
export class SetsService {
  constructor(@InjectModel(Set.name) private setModel: Model<SetDocument>) {}
  create(createSetDto: CreateSetDto) {
    return this.setModel.create(createSetDto);
  }

  findAll() {
    return this.setModel.find().exec();
  }

  findOne(id: number) {
    return this.setModel.findById(id).exec();
  }

  update(id: string, updateSetDto: UpdateSetDto) {
    return this.setModel.findByIdAndUpdate(id, updateSetDto).exec();
  }

  remove(id: string) {
    return this.setModel.findByIdAndDelete(id).exec();
  }
}
