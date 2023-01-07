import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from '../../users/schemas/user.schema';
import { Exercise } from '../../exercises/schemas/exercise.schema';

export type SetDocument = HydratedDocument<Set>;

@Schema({ timestamps: true })
export class Set {
  @Prop()
  description: string;
  @Prop()
  repetitions: number;
  @Prop()
  weight: number;
  @Prop({
    required: true,
  })
  date: Date;
  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  })
  userId: User;
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exercise',
    required: true,
  })
  exerciseId: Exercise;
}

export const SetSchema = SchemaFactory.createForClass(Set);
