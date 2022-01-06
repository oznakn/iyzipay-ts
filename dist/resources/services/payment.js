"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const http_1 = require("../../http");
class Payment {
    config;
    constructor(config) {
        this.config = config;
    }
    async create(body) {
        var path = "/payment/auth";
        return await (0, http_1._post)(path, body, this.config);
    }
    async retrieve(body) {
        var path = "/payment/detail";
        return await (0, http_1._post)(path, body, this.config);
    }
}
exports.Payment = Payment;
//# sourceMappingURL=payment.js.map