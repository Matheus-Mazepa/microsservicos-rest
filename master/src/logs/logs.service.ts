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

  async create(): Promise<LogsEntity> {
    const log = this.logsRepository.create(new LogsEntity());
    await this.logsRepository.save(log);

    console.log(this.configService.get('NODE_1_URL'));
    try {
      await this.httpService.axiosRef.post(
        `${this.configService.get('NODE_1_URL')}/logs`,
        { log },
      );
      console.log('Success');
    } catch (error) {
      console.log('Failed');
    }

    return log;
  }

  async update(id: number): Promise<void> {
    await this.logsRepository.update(id, {
      the_flow_has_ended: true,
    });
  }
}
