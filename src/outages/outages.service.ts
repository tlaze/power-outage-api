import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Outages } from './outages.entity';

@Injectable()
export class OutagesService {
    constructor(
        @InjectRepository(Outages)
        private readonly outageRepository: Repository<Outages>
    ) {}

    async create(outageData: Partial<Outages>): Promise<Outages>{
        const outage = this.outageRepository.create(outageData);
        return this.outageRepository.save(outage)
    }

    async findAll(): Promise<Outages[]>{
        return this.outageRepository.find();
    }
}
