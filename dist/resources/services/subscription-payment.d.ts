import { IConfig } from "../../interfaces";
import { ICreateSubscriptionPaymentRetryRequest } from "../models";
export declare class SubscriptionPayment {
    protected readonly config: IConfig;
    constructor(config: IConfig);
    retry(body: ICreateSubscriptionPaymentRetryRequest): Promise<unknown>;
}
