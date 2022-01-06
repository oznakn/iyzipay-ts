import { IConfig } from "../../interfaces";
import { ICreateDisApprovalRequest } from "../models";
export declare class Disapproval {
    protected readonly config: IConfig;
    constructor(config: IConfig);
    create(body: ICreateDisApprovalRequest): Promise<unknown>;
}
