import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OutagesService } from './outages.service';
import { OutagesController } from './outages.controller';
import { Outages } from './outages.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Outages])],
  providers: [OutagesService],
  controllers: [OutagesController],
})
export class OutagesModule {}
