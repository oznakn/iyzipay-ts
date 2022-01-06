import { IConfig } from "../../interfaces";
import { ICreateBkmInitializeRequest } from "../models";
export declare class BkmInitialize {
    protected readonly config: IConfig;
    constructor(config: IConfig);
    create(body: ICreateBkmInitializeRequest): Promise<unknown>;
}
