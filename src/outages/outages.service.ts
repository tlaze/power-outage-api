import { Injectable, NotFoundException } from '@nestjs/common';
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

    async resolve(id: number): Promise<Outages>{
        const outage = await this.outageRepository.findOneBy({id})
        if(!outage){
            throw new NotFoundException(`Outage with ID ${id} not found`)
        }
        outage.resolved = true;
        return this.outageRepository.save(outage)
    }
}
