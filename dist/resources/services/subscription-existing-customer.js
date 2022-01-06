"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionExistingCustomer = void 0;
const http_1 = require("../../http");
class SubscriptionExistingCustomer {
    config;
    constructor(config) {
        this.config = config;
    }
    async initialize(body) {
        var path = "/v2/subscription/initialize/with-customer";
        return await (0, http_1._post)(path, body, this.config);
    }
}
exports.SubscriptionExistingCustomer = SubscriptionExistingCustomer;
//# sourceMappingURL=subscription-existing-customer.js.map