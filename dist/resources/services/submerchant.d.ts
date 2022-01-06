import { IConfig } from "../../interfaces";
import { ICreateSubMerchantRequest, IUpdateSubMerchantRequest, IRetrieveSubMerchantRequest } from "../models";
export declare class SubMerchant {
    protected readonly config: IConfig;
    constructor(config: IConfig);
    private path;
    create(body: ICreateSubMerchantRequest): Promise<unknown>;
    update(body: IUpdateSubMerchantRequest): Promise<unknown>;
    retrieve(body: IRetrieveSubMerchantRequest): Promise<unknown>;
}
