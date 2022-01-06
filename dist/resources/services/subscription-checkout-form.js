"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionCheckoutForm = void 0;
const http_1 = require("../../http");
class SubscriptionCheckoutForm {
    config;
    constructor(config) {
        this.config = config;
    }
    async initialize(body) {
        var path = "/v2/subscription/checkoutform/initialize";
        return await (0, http_1._post)(path, body, this.config);
    }
    async retrieve(body) {
        var path = `/v2/subscription/checkoutform/${body.checkoutFormToken}`;
        return await (0, http_1._get)(path, this.config);
    }
}
exports.SubscriptionCheckoutForm = SubscriptionCheckoutForm;
//# sourceMappingURL=subscription-checkout-form.js.map