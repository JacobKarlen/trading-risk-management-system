import { Schema, model, Document } from "mongoose";

export interface PortfolioSnapshot {
    /* portfolio snapshot: defined as the daily snapshot of the portfolio such
    as equity, market value, etc. and is also related to position snapshots. */

    date: Date,
    equity: number,
    marketValue: number,
    leverage: number,
    cashPosition: number,
    positionSnapshots: PositionSnapshot[]
}

export interface PositionSnapshot {
    /* position snapshot: defined as the daily snapshot of a position in the
    portfolio, and holds information about current market value of position,
    unrealized PnL etc. */

   ticker: string,
   instrumentName: string,
   avgPrice: number, // represents GAV
   currentPrice: number,
   marketValue: number,
   unrealizedPnL: number
}