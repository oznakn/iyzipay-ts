import { IConfig } from "../../interfaces";
import { ICreateUniversalCardStorageInitializeRequest } from "../models";
export declare class UniversalCardStorageInitialize {
    protected readonly config: IConfig;
    constructor(config: IConfig);
    retrieve(body: ICreateUniversalCardStorageInitializeRequest): Promise<unknown>;
}
