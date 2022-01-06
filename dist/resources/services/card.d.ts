import { IConfig } from "../../interfaces";
import { ICreateCardRequest, IDeleteCardRequest } from "../models";
export declare class Card {
    protected readonly config: IConfig;
    constructor(config: IConfig);
    private path;
    create(body: ICreateCardRequest): Promise<unknown>;
    delete(body: IDeleteCardRequest): Promise<unknown>;
}
