"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeccoPayment = void 0;
const http_1 = require("../../http");
class PeccoPayment {
    config;
    constructor(config) {
        this.config = config;
    }
    async create(body) {
        var path = "/payment/pecco/auth";
        return await (0, http_1._post)(path, body, this.config);
    }
}
exports.PeccoPayment = PeccoPayment;
//# sourceMappingURL=pecco-payment.js.map