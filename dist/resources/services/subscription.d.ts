import { IConfig } from "../../interfaces";
import { ICreateSubscriptionInitRequest, ISubscriptionParam, IUpgradeSubscriptionRequest, ISearchSubscriptionRequest } from "../models";
export declare class Subscription {
    protected readonly config: IConfig;
    constructor(config: IConfig);
    initialize(body: ICreateSubscriptionInitRequest): Promise<unknown>;
    cancel(body: ISubscriptionParam): Promise<unknown>;
    activate(body: ISubscriptionParam): Promise<unknown>;
    upgrade(body: IUpgradeSubscriptionRequest & ISubscriptionParam): Promise<unknown>;
    retrieve(body: ISubscriptionParam): Promise<unknown>;
    search(body: ISearchSubscriptionRequest): Promise<unknown>;
}
