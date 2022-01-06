import { IConfig } from "../../interfaces";
import { ICreateSubscriptionCheckoutFormInitRequest, ISubscriptionCheckoutFormParam } from "../models";
export declare class SubscriptionCheckoutForm {
    protected readonly config: IConfig;
    constructor(config: IConfig);
    initialize(body: ICreateSubscriptionCheckoutFormInitRequest): Promise<unknown>;
    retrieve(body: ISubscriptionCheckoutFormParam): Promise<unknown>;
}
