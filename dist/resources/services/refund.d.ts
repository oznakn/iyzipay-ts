import { IConfig } from "../../interfaces";
import { ICreateRefundRequest } from "../models";
export declare class Refund {
    protected readonly config: IConfig;
    constructor(config: IConfig);
    create(body: ICreateRefundRequest): Promise<unknown>;
}
