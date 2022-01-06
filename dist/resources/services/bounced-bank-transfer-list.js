"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BouncedBankTransferList = void 0;
const http_1 = require("../../http");
class BouncedBankTransferList {
    config;
    constructor(config) {
        this.config = config;
    }
    async retrieve(body) {
        var path = "/reporting/settlement/payoutcompleted";
        return await (0, http_1._post)(path, body, this.config);
    }
}
exports.BouncedBankTransferList = BouncedBankTransferList;
//# sourceMappingURL=bounced-bank-transfer-list.js.map