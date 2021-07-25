import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";

import { Balance, BalanceDocument } from "./schemas/balance.schema";

@Injectable()
export class BalanceRepository {
    constructor(@InjectModel(Balance.name) private balanceModel: Model<BalanceDocument>) {}

    async find(balanceFilterQuery: FilterQuery<Balance>): Promise<Balance[]> {
        return this.balanceModel.find(balanceFilterQuery)
    }

    async create(balance: Balance): Promise<Balance> {
        const newUser = new this.balanceModel(balance);
        return newUser.save()
    }
}