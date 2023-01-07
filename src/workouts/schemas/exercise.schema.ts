import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from '../../users/schemas/user.schema';
import { Exercise } from '../../exercises/schemas/exercise.schema';

export type WorkoutDocument = HydratedDocument<Workout>;

@Schema({ timestamps: true })
export class Workout {
  @Prop()
  description: string;
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

export const WorkoutSchema = SchemaFactory.createForClass(Workout);
