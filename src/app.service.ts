import { Injectable } from '@nestjs/common';
import {HttpService} from '@nestjs/axios'
import { DbService } from './shared';

@Injectable()
export class AppService {
  constructor(private readonly db: DbService) {}
  async getHello(): Promise<string> {
    const result = await this.db.create('vitalikWatchlist', ['matic-network']);
    return `Hello Wold! ${JSON.stringify(result)}`;
  }
  constructor(private readonly httpService: HttpService)
}
