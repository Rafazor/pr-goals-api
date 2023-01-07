import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from '../../users/schemas/user.schema';
import { Routine } from '../../routines/schemas/routine.schema';

export type ExerciseDocument = HydratedDocument<Exercise>;

@Schema({ timestamps: true })
export class Exercise {
  @Prop({ required: true })
  name: string;
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
    ref: 'User',
  })
  routineId: Routine;
}

export const ExerciseSchema = SchemaFactory.createForClass(Exercise);
