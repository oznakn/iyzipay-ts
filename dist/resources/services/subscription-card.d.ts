import { IConfig } from "../../interfaces";
import { IUpdateSubscriptionCardRequest, IUpdateSubscriptionCardWithSubscriptionReferenceCodeRequest } from "../models";
export declare class SubscriptionCard {
    protected readonly config: IConfig;
    constructor(config: IConfig);
    update(body: IUpdateSubscriptionCardRequest): Promise<unknown>;
    updateWithSubscriptionReferenceCode(body: IUpdateSubscriptionCardWithSubscriptionReferenceCodeRequest): Promise<unknown>;
}
