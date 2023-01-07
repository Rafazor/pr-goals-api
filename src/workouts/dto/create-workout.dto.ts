import { ApiProperty } from '@nestjs/swagger';

export class CreateWorkoutDto {
  @ApiProperty()
  description: string;
  @ApiProperty()
  userId: string;
  @ApiProperty()
  exerciseId?: string;
}
