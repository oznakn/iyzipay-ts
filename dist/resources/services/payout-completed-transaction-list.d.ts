import { IConfig } from "../../interfaces";
import { IRetrievePayoutCompletedTransactionRequest } from "../models";
export declare class PayoutCompletedTransactionList {
    protected readonly config: IConfig;
    constructor(config: IConfig);
    retrieve(body: IRetrievePayoutCompletedTransactionRequest): Promise<unknown>;
}
