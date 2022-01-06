import { IConfig } from "../../interfaces";
import { ICreateSubscriptionProductRequest, IUpdateSubscriptionProductRequest, ISubscriptionProductParam, IRetrieveSubscriptionProductListRequest } from "../models";
export declare class SubscriptionProduct {
    protected readonly config: IConfig;
    constructor(config: IConfig);
    create(body: ICreateSubscriptionProductRequest): Promise<unknown>;
    update(body: IUpdateSubscriptionProductRequest & ISubscriptionProductParam): Promise<unknown>;
    delete(body: ISubscriptionProductParam): Promise<unknown>;
    retrieve(body: ISubscriptionProductParam): Promise<unknown>;
    retrieveList(body: IRetrieveSubscriptionProductListRequest): Promise<unknown>;
}
