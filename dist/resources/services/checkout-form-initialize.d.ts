import { IConfig } from "../../interfaces";
import { ICreateCheckoutFormInitializeRequest } from "../models";
export declare class CheckoutFormInitialize {
    protected readonly config: IConfig;
    constructor(config: IConfig);
    create(body: ICreateCheckoutFormInitializeRequest): Promise<unknown>;
}
