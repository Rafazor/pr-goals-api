import { ApiProperty } from '@nestjs/swagger';

export class CreateSetDto {
  @ApiProperty()
  userId: string;
  @ApiProperty()
  exerciseId: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  repetitions: number;
  @ApiProperty()
  weight: number;
  @ApiProperty()
  date: Date;
}
