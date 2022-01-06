"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettlementToBalance = void 0;
const http_1 = require("../../http");
class SettlementToBalance {
    config;
    constructor(config) {
        this.config = config;
    }
    async create(body) {
        var path = "/payment/settlement-to-balance/init";
        return await (0, http_1._post)(path, body, this.config);
    }
}
exports.SettlementToBalance = SettlementToBalance;
//# sourceMappingURL=settlement-to-balance.js.map