import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateBalanceDto } from './dto/create-balance.dto';
import { Balance } from './schemas/balance.schema';
import { BalanceService } from './balance.service';

@Controller('balance')
export class BalanceController {
  constructor(private readonly balanceService: BalanceService) {}
  @Get()
  async getBalance(): Promise<Balance[]> {
      return this.balanceService.getBalance();
  }

  @Post()
  async createBalance(@Body() createBalanceDto: CreateBalanceDto): Promise<Balance> {
      return this.balanceService.createBalance(createBalanceDto.userBalance)
  }
}