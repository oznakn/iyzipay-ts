import { IConfig } from "../../interfaces/IConfig";
import { ICreatePaymentRequest, IRetrievePayment } from "../models";
export declare class Payment {
    protected readonly config: IConfig;
    constructor(config: IConfig);
    create(body: ICreatePaymentRequest): Promise<unknown>;
    retrieve(body: IRetrievePayment): Promise<unknown>;
}
