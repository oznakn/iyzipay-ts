"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionPayment = void 0;
const http_1 = require("../../http");
class SubscriptionPayment {
    config;
    constructor(config) {
        this.config = config;
    }
    async retry(body) {
        var path = "/v2/subscription/operation/retry";
        return await (0, http_1._post)(path, body, this.config);
    }
}
exports.SubscriptionPayment = SubscriptionPayment;
//# sourceMappingURL=subscription-payment.js.map