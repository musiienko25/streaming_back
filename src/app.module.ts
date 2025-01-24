import { Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlowersModule } from './flowers/flowers.module';
import { FlowersService } from './flowers/flowers.service';
import { MiddlewareConsumer } from '@nestjs/common';
import { BasicMiddleware } from './conception/middleware';

@Module({
  imports: [FlowersModule],
  controllers: [AppController],
  providers: [AppService, FlowersService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(BasicMiddleware).forRoutes('flowers');
  }
}
