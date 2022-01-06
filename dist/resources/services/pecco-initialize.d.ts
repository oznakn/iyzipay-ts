import { IConfig } from "../../interfaces";
import { ICreatePeccoInitializeRequest } from "../models";
export declare class PeccoInitialize {
    protected readonly config: IConfig;
    constructor(config: IConfig);
    create(body: ICreatePeccoInitializeRequest): Promise<unknown>;
}
