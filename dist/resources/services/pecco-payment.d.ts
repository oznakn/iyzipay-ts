import { IConfig } from "../../interfaces";
import { ICreatePeccoPaymentRequest } from "../models";
export declare class PeccoPayment {
    protected readonly config: IConfig;
    constructor(config: IConfig);
    create(body: ICreatePeccoPaymentRequest): Promise<unknown>;
}
