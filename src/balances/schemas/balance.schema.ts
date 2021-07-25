import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type BalanceDocument = Balance & Document;

@Schema()
export class Balance {
    @Prop()
    balanceId: string;
    @Prop()
    userBalance: number;
}

export const BalanceSchema = SchemaFactory.createForClass(Balance);