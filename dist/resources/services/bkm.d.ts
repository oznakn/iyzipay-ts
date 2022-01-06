import { IConfig } from "../../interfaces";
import { IRetrieveBkmRequest } from "../models";
export declare class Bkm {
    protected readonly config: IConfig;
    constructor(config: IConfig);
    retrieve(body: IRetrieveBkmRequest): Promise<unknown>;
}
