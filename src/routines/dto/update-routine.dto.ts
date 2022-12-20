import { CreateRoutineDto } from './create-routine.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateRoutineDto extends PartialType(CreateRoutineDto) {}
