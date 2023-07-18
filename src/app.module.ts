import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { dataSourceOptions } from '../dist/db/data-source';

@Module({
  imports: [TypeOrmModule.forRoot(
    dataSourceOptions
  ), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
