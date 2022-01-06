import { IConfig } from "../../interfaces";
import { IRetrieveInstallmentInfoRequest } from "../models";
export declare class InstallmentInfo {
    protected readonly config: IConfig;
    constructor(config: IConfig);
    retrieve(body: IRetrieveInstallmentInfoRequest): Promise<unknown>;
}
