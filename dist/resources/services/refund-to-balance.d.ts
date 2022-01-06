import { IConfig } from "../../interfaces";
import { ICreateRefundToBalanceInitRequest } from "../models";
export declare class RefundToBalance {
    protected readonly config: IConfig;
    constructor(config: IConfig);
    create(body: ICreateRefundToBalanceInitRequest): Promise<unknown>;
}
