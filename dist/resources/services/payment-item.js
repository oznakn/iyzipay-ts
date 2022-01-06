"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentItem = void 0;
const http_1 = require("../../http");
class PaymentItem {
    config;
    constructor(config) {
        this.config = config;
    }
    async update(body) {
        var path = "/payment/item";
        return await (0, http_1._put)(path, body, this.config);
    }
}
exports.PaymentItem = PaymentItem;
//# sourceMappingURL=payment-item.js.map