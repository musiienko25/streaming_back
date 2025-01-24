import { Controller, Get } from '@nestjs/common';
import { FlowersService } from './flowers.service';

@Controller('api/flowers')
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @Get()
  findAll() {
    return this.flowersService.findAll();
  }
}
