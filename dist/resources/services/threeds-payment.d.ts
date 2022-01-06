import { IConfig } from "../../interfaces";
import { ICreateThreedsPaymentRequest, IRetrievePayment } from "../models";
export declare class ThreedsPayment {
    protected readonly config: IConfig;
    constructor(config: IConfig);
    create(body: ICreateThreedsPaymentRequest): Promise<unknown>;
    retrieve(body: IRetrievePayment): Promise<unknown>;
}
