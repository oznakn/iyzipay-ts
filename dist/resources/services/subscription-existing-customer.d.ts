import { IConfig } from "../../interfaces";
import { ICreateSubscriptionInitExistingCustomerRequest } from "../models";
export declare class SubscriptionExistingCustomer {
    protected readonly config: IConfig;
    constructor(config: IConfig);
    initialize(body: ICreateSubscriptionInitExistingCustomerRequest): Promise<unknown>;
}
