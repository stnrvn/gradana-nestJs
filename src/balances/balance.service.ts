import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { Balance } from "./schemas/balance.schema";
import { BalanceRepository } from "./balance.repository";

@Injectable()
export class BalanceService {
    constructor(private readonly balanceRepository: BalanceRepository) {}

    async getBalance(): Promise<Balance[]> {
      return this.balanceRepository.find({});
    }

    async createBalance(userBalance: number): Promise<Balance> {
        return this.balanceRepository.create({
            balanceId: uuidv4(),
            userBalance
        })
    }
}