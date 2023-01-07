import { Module } from '@nestjs/common';
import { SetsService } from './sets.service';
import { SetsController } from './sets.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SetSchema } from './schemas/set.schema';

@Module({
  controllers: [SetsController],
  providers: [SetsService],
  imports: [MongooseModule.forFeature([{ name: Set.name, schema: SetSchema }])],
})
export class SetsModule {}
