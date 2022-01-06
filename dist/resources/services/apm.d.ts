import { IConfig } from "../../interfaces";
import { ICreateApmInitializeRequest, IRetrieveApmRequest } from "../models";
export declare class Apm {
    protected readonly config: IConfig;
    constructor(config: IConfig);
    create(body: ICreateApmInitializeRequest): Promise<unknown>;
    retrieve(body: IRetrieveApmRequest): Promise<unknown>;
}
