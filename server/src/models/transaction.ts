import { Schema, model, Document } from "mongoose";

export interface Transaction {
    /* transaction: defined as the group of executions that initiates and
    liquidates a given position without crossing over from long to short */

    instrumentName: string,
    ticker: string,
    marketDirection: string,
    initiationDate: Date,
    liquidationDate: Date,
    holdingPeriod: number,
    avgInitiationPrice: number,
    avgLiquidationPrice: number,
    stopLoss: number,
    executions: Execution[]
}

export interface Execution {
    /* execution: defined as a single buy or sell, i.e. pyramiding into a
    stock will be represented by multiple executions but only one transaction */

    date: Date, // includes time
    orderType: string, // market or limit etc.
    executionType: string, // buy or sell
    price: number,
    currency: string,
    quantity: number,
    commision: number,
    indicator: string, // from a set of indicators followed
    comment: string
}