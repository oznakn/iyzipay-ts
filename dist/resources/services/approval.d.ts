import { IConfig } from "../../interfaces";
import { ICreateApprovalRequest } from "../models";
export declare class Approval {
    protected readonly config: IConfig;
    constructor(config: IConfig);
    create(body: ICreateApprovalRequest): Promise<unknown>;
}
