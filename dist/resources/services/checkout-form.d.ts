import { IConfig } from "../../interfaces";
import { IRetrieveCheckoutFormRequest } from "../models";
export declare class CheckoutForm {
    protected readonly config: IConfig;
    constructor(config: IConfig);
    retrieve(body: IRetrieveCheckoutFormRequest): Promise<unknown>;
}
