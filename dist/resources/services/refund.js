"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Refund = void 0;
const http_1 = require("../../http");
class Refund {
    config;
    constructor(config) {
        this.config = config;
    }
    async create(body) {
        var path = "/payment/refund";
        return await (0, http_1._post)(path, body, this.config);
    }
}
exports.Refund = Refund;
//# sourceMappingURL=refund.js.map