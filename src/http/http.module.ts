import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TestController } from './test.controller';

@Module({
  imports: [ConfigModule.forRoot()], // para o nest ler .env
  controllers: [TestController],
})
export class HttpModule {}
