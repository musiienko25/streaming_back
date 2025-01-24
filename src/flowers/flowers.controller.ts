import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { FlowersService } from './flowers.service';

@Controller('api/flowers')
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @Get()
  findAll(@Query('pageNumber', ParseIntPipe) pageNumber: number) {
    console.log(pageNumber)
    return this.flowersService.findAll();
  }
}
