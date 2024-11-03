import { Module } from '@nestjs/common';
import { LogsEntity } from './logs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogsController } from './logs.controller';
import { LogsService } from './logs.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TypeOrmModule.forFeature([LogsEntity]), HttpModule],
  controllers: [LogsController],
  providers: [LogsService],
})
export class LogsModule {}
