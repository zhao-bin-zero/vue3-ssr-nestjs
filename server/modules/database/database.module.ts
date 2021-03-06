import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

/**
 * database module
 * @description Module
 */
@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders]
})
export class DataBaseModule {
  // hole
}
