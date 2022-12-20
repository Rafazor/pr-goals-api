import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RoutineDocument = HydratedDocument<Routine>;

@Schema({ timestamps: true })
export class Routine {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;
}

export const RoutineSchema = SchemaFactory.createForClass(Routine);
