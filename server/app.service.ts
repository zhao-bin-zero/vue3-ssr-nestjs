import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {
    console.log(1);
  }

  test() {
    return 'test.';
  }

  findAll() {
    return 'findAll';
  }
}