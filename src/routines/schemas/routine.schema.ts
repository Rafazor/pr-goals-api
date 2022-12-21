import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from '../../users/schemas/user.schema';

export type RoutineDocument = HydratedDocument<Routine>;

@Schema({ timestamps: true })
export class Routine {
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
}

export const RoutineSchema = SchemaFactory.createForClass(Routine);
