import { ApiProperty } from '@nestjs/swagger';

export class CreateRoutineDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  userId: string;
}
