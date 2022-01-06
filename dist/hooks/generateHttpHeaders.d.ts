import { IConfig, IBody } from "../interfaces";
export declare const generateHttpHeaders: (path: string, body: IBody, config: IConfig) => {
    Authorization: string;
    "x-iyzi-rnd": string;
    "x-iyzi-client-version": string;
    "Content-Type": string;
    Connection: string;
};
