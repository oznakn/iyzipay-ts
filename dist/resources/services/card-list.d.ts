import { IConfig } from "../../interfaces";
import { IRetrieveCardListRequest } from "../models";
export declare class CardList {
    protected readonly config: IConfig;
    constructor(config: IConfig);
    retrieve(body: IRetrieveCardListRequest): Promise<unknown>;
}
