import { Controller, Post, Body } from '@nestjs/common';
import { LogsService } from './logs.service';

@Controller('logs')
export class LogsController {
  constructor(private readonly logsService: LogsService) {}

  @Post()
  async createLog(
    @Body() message: { log: { initial_log: number } }
  ): Promise<void> {
    if (message.log?.initial_log) {
      await this.logsService.create(message.log.initial_log);
    }
  }
}
