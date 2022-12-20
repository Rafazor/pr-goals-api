import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoutinesModule } from './routines/routines.module';

@Module({
  imports: [RoutinesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
