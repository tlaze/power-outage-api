import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { OutagesService } from './outages.service';
import { Outages } from './outages.entity';
import { CreateOutageDto } from './dto/create-outage.dto';

@Controller('outages')
export class OutagesController {
    constructor(private readonly outageService: OutagesService){}

    @Get()
    async findAll(): Promise<Outages[]>{
        return this.outageService.findAll()
    }

    @Post()
    create(@Body() dto: CreateOutageDto): Promise<Outages>{
        return this.outageService.create(dto)
    }

    @Patch(':id/resolve')
    resolve(@Param('id') id: string): Promise<Outages>{
        return this.outageService.resolve(+id)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') id:string): Promise<void> {
        return this.outageService.remove(+id);
    }
}
