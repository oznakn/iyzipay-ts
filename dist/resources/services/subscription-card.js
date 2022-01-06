"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionCard = void 0;
const http_1 = require("../../http");
class SubscriptionCard {
    config;
    constructor(config) {
        this.config = config;
    }
    async update(body) {
        var path = "/v2/subscription/card-update/checkoutform/initialize";
        return await (0, http_1._post)(path, body, this.config);
    }
    async updateWithSubscriptionReferenceCode(body) {
        var path = "/v2/subscription/card-update/checkoutform/initialize/with-subscription";
        return await (0, http_1._post)(path, body, this.config);
    }
}
exports.SubscriptionCard = SubscriptionCard;
//# sourceMappingURL=subscription-card.js.map