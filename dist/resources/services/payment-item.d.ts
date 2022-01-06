import { IConfig } from "../../interfaces";
import { IUpdateSubMerchantPaymentItemRequest } from "../models";
export declare class PaymentItem {
    protected readonly config: IConfig;
    constructor(config: IConfig);
    update(body: IUpdateSubMerchantPaymentItemRequest): Promise<unknown>;
}
