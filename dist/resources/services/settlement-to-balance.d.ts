import { IConfig } from "../../interfaces";
import { ICreateSettlementToBalanceInitRequest } from "../models";
export declare class SettlementToBalance {
    protected readonly config: IConfig;
    constructor(config: IConfig);
    create(body: ICreateSettlementToBalanceInitRequest): Promise<unknown>;
}
