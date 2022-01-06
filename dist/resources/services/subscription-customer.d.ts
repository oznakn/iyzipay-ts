import { IConfig } from "../../interfaces";
import { ICreateSubscriptionCustomerRequest, ISubscriptionCustomerUpdateRequest, ISubscriptionCustomerParam, IRetrieveSubscriptionCustomerListRequest } from "../models";
export declare class SubscriptionCustomer {
    protected readonly config: IConfig;
    constructor(config: IConfig);
    create(body: ICreateSubscriptionCustomerRequest): Promise<unknown>;
    update(body: ISubscriptionCustomerUpdateRequest & ISubscriptionCustomerParam): Promise<unknown>;
    retrieve(body: ISubscriptionCustomerParam): Promise<unknown>;
    retrieveList(body: IRetrieveSubscriptionCustomerListRequest): Promise<unknown>;
}
