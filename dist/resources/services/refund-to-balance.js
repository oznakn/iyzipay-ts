"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefundToBalance = void 0;
const http_1 = require("../../http");
class RefundToBalance {
    config;
    constructor(config) {
        this.config = config;
    }
    async create(body) {
        var path = "/payment/refund-to-balance/init";
        return await (0, http_1._post)(path, body, this.config);
    }
}
exports.RefundToBalance = RefundToBalance;
//# sourceMappingURL=refund-to-balance.js.map