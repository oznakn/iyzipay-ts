import { _post, _delete } from "../../http";
import { IConfig } from "../../interfaces";
import { ICreateUniversalCardStorageInitializeRequest } from "../models";
export class UniversalCardStorageInitialize {
  constructor(protected readonly config: IConfig) {}

  public async retrieve(body: ICreateUniversalCardStorageInitializeRequest) {
    var path = "/payment/iyzipos/checkoutform/auth/ecom/detail";
    return await _post(path, body, this.config);
  }
}
