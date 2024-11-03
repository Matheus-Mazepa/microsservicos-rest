import { Controller, Post, Body } from '@nestjs/common';
import { LogsService } from './logs.service';
import { InjectRepository } from '@nestjs/typeorm';
import { LogsEntity } from './logs.entity';
import { Repository } from 'typeorm';

@Controller('logs')
export class LogsController {
  constructor(
    @InjectRepository(LogsEntity)
    private logsRepository: Repository<LogsEntity>,
    private readonly logsService: LogsService,
  ) {}

  @Post()
  async createLog(@Body() message: { log: { id: number } }): Promise<void> {
    if (message.log?.id) {
      await this.logsService.create(message.log.id);
    }
  }
}
