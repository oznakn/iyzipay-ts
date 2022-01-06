import { IConfig } from "../../interfaces";
import { IRetrieveBinNumberRequest } from "../models";
export declare class BinNumber {
    protected readonly config: IConfig;
    constructor(config: IConfig);
    retrieve(body: IRetrieveBinNumberRequest): Promise<unknown>;
}
