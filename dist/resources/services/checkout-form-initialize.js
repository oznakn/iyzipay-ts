"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutFormInitialize = void 0;
const http_1 = require("../../http");
class CheckoutFormInitialize {
    config;
    constructor(config) {
        this.config = config;
    }
    async create(body) {
        var path = "/payment/iyzipos/checkoutform/initialize/auth/ecom";
        return await (0, http_1._post)(path, body, this.config);
    }
}
exports.CheckoutFormInitialize = CheckoutFormInitialize;
//# sourceMappingURL=checkout-form-initialize.js.map