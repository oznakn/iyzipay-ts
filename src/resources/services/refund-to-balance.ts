import { _post, _put } from "../../http";
import { IConfig } from "../../interfaces";
import { ICreateRefundToBalanceInitRequest } from "../models";

export class RefundToBalance {
  constructor(protected readonly config: IConfig) {}

  public async create(body: ICreateRefundToBalanceInitRequest) {
    var path: string = "/payment/refund-to-balance/init";
    return await _post(path, body, this.config);
  }
}
