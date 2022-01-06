import { IConfig } from "../../interfaces";
import { ICreateSubscriptionPricingPlanRequest, IUpdateSubscriptionPricingPlanRequest, ISubscriptionPricingPlanParam, IRetrieveSubscriptionPricingPlanListRequest } from "../models";
export declare class SubscriptionPricingPlan {
    protected readonly config: IConfig;
    constructor(config: IConfig);
    create(body: ICreateSubscriptionPricingPlanRequest): Promise<unknown>;
    update(body: IUpdateSubscriptionPricingPlanRequest & ISubscriptionPricingPlanParam): Promise<unknown>;
    delete(body: ISubscriptionPricingPlanParam): Promise<unknown>;
    retrieveList(body: IRetrieveSubscriptionPricingPlanListRequest): Promise<unknown>;
    retrieve(body: ISubscriptionPricingPlanParam): Promise<unknown>;
}
