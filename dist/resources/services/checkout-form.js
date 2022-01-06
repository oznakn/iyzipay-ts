"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutForm = void 0;
const http_1 = require("../../http");
class CheckoutForm {
    config;
    constructor(config) {
        this.config = config;
    }
    async retrieve(body) {
        var path = "/payment/iyzipos/checkoutform/auth/ecom/detail";
        return await (0, http_1._post)(path, body, this.config);
    }
}
exports.CheckoutForm = CheckoutForm;
//# sourceMappingURL=checkout-form.js.map