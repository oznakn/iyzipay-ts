import { IConfig } from "../../interfaces";
import { IRetrieveBouncedBankRequest } from "../models";
export declare class BouncedBankTransferList {
    protected readonly config: IConfig;
    constructor(config: IConfig);
    retrieve(body: IRetrieveBouncedBankRequest): Promise<unknown>;
}
