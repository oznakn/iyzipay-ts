"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionProduct = void 0;
const hooks_1 = require("../../hooks");
const http_1 = require("../../http");
class SubscriptionProduct {
    config;
    constructor(config) {
        this.config = config;
    }
    async create(body) {
        var path = "/v2/subscription/products";
        return await (0, http_1._post)(path, body, this.config);
    }
    async update(body) {
        var path = `/v2/subscription/products/${body.productReferenceCode}`;
        await delete body.productReferenceCode;
        return await (0, http_1._post)(path, body, this.config);
    }
    async delete(body) {
        var path = `/v2/subscription/products/${body.productReferenceCode}`;
        return await (0, http_1._delete)(path, {}, this.config);
    }
    async retrieve(body) {
        var path = `/v2/subscription/products/${body.productReferenceCode}`;
        return await (0, http_1._get)(path, this.config);
    }
    async retrieveList(body) {
        var path = "/v2/subscription/products" + (0, hooks_1.generateQueryString)(body);
        return await (0, http_1._get)(path, this.config);
    }
}
exports.SubscriptionProduct = SubscriptionProduct;
//# sourceMappingURL=subscription-product.js.map