import { IConfig } from "../../interfaces";
export declare class ApiTest {
    protected readonly config: IConfig;
    constructor(config: IConfig);
    retrieve(): Promise<unknown>;
}
