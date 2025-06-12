import { Controller, Get, Post, Body } from '@nestjs/common';
import { OutagesService } from './outages.service';
import { Outages } from './outages.entity';

@Controller('outages')
export class OutagesController {
    constructor(private readonly outageService: OutagesService){}

    @Post()
    async create(@Body() outageData: Partial<Outages>): Promise<Outages>{
        return this.outageService.create(outageData)
    }

    @Get()
    async findAll(): Promise<Outages[]>{
        return this.outageService.findAll()
    }
}
