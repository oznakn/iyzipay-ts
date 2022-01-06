import { IConfig } from "../../interfaces";
import { ICreateCancelRequest } from "../models";
export declare class Cancel {
    protected readonly config: IConfig;
    constructor(config: IConfig);
    create(body: ICreateCancelRequest): Promise<unknown>;
}
