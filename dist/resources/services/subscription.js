"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscription = void 0;
const hooks_1 = require("../../hooks");
const http_1 = require("../../http");
class Subscription {
    config;
    constructor(config) {
        this.config = config;
    }
    async initialize(body) {
        var path = "/v2/subscription/initialize";
        return await (0, http_1._post)(path, body, this.config);
    }
    async cancel(body) {
        var path = `/v2/subscription/subscriptions/${body.subscriptionReferenceCode}/cancel`;
        await delete body.subscriptionReferenceCode;
        return await (0, http_1._post)(path, body, this.config);
    }
    async activate(body) {
        var path = `/v2/subscription/subscriptions/${body.subscriptionReferenceCode}/activate`;
        await delete body.subscriptionReferenceCode;
        return await (0, http_1._post)(path, body, this.config);
    }
    async upgrade(body) {
        var path = `/v2/subscription/subscriptions/${body.subscriptionReferenceCode}/upgrade`;
        await delete body.subscriptionReferenceCode;
        return await (0, http_1._post)(path, body, this.config);
    }
    async retrieve(body) {
        var path = `/v2/subscription/subscriptions/${body.subscriptionReferenceCode}`;
        return await (0, http_1._get)(path, this.config);
    }
    async search(body) {
        var path = "/v2/subscription/subscriptions" + (0, hooks_1.generateQueryString)(body);
        return await (0, http_1._get)(path, this.config);
    }
}
exports.Subscription = Subscription;
//# sourceMappingURL=subscription.js.map