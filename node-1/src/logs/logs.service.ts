import { Repository } from 'typeorm';
import { LogsEntity } from './logs.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LogsService {
  constructor(
    @InjectRepository(LogsEntity)
    private logsRepository: Repository<LogsEntity>,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async create(id: number): Promise<LogsEntity> {
    const log = this.logsRepository.create({ initial_log: id });
    await this.logsRepository.save(log);

    try {
      await this.httpService.axiosRef.post(
        `${this.configService.get('NODE_2_URL')}/logs`,
        { log },
      );
      console.log('Success');
    } catch (error) {
      console.log('Failed');
    }

    return log;
  }
}
