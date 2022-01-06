"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionCustomer = void 0;
const hooks_1 = require("../../hooks");
const http_1 = require("../../http");
class SubscriptionCustomer {
    config;
    constructor(config) {
        this.config = config;
    }
    async create(body) {
        var path = "/v2/subscription/customers";
        return await (0, http_1._post)(path, body, this.config);
    }
    async update(body) {
        var path = `/v2/subscription/customers/${body.customerReferenceCode}`;
        await delete body.customerReferenceCode;
        return await (0, http_1._post)(path, body, this.config);
    }
    async retrieve(body) {
        var path = `/v2/subscription/customers/${body.customerReferenceCode}`;
        return await (0, http_1._get)(path, this.config);
    }
    async retrieveList(body) {
        var path = "/v2/subscription/customers" + (0, hooks_1.generateQueryString)(body);
        return await (0, http_1._get)(path, this.config);
    }
}
exports.SubscriptionCustomer = SubscriptionCustomer;
//# sourceMappingURL=subscription-customer.js.map