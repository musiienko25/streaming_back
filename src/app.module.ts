import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlowersModule } from './flowers/flowers.module';
import { FlowersService } from './flowers/flowers.service';

@Module({
  imports: [FlowersModule],
  controllers: [AppController],
  providers: [AppService, FlowersService],
})
export class AppModule {}
