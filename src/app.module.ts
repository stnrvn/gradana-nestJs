import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BalanceModule } from './balances/balance.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://sutan:dbtest321@cluster0.bpr5l.mongodb.net/myFirstDatabase?retryWrites=true&writeConcern=majority'),
    BalanceModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
