import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DataSourceOptions } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(
    DataSourceOptions 
  ), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
