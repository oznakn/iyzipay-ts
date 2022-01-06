import { IConfig } from "../../interfaces";
import { ICreate3DsInitializeRequest } from "../models";
export declare class ThreedsInitialize {
    protected readonly config: IConfig;
    constructor(config: IConfig);
    create(body: ICreate3DsInitializeRequest): Promise<unknown>;
}
