import { ApiProperty } from '@nestjs/swagger';

export class CreateExerciseDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  userId: string;
  @ApiProperty()
  routineId?: string;
}
