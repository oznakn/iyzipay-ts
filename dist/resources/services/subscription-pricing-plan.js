"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionPricingPlan = void 0;
const http_1 = require("../../http");
const hooks_1 = require("../../hooks");
class SubscriptionPricingPlan {
    config;
    constructor(config) {
        this.config = config;
    }
    async create(body) {
        var path = `/v2/subscription/products/${body.productReferenceCode}/pricing-plans`;
        await delete body.productReferenceCode;
        return await (0, http_1._post)(path, body, this.config);
    }
    async update(body) {
        var path = `/v2/subscription/pricing-plans/${body.pricingPlanReferenceCode}`;
        await delete body.pricingPlanReferenceCode;
        return await (0, http_1._post)(path, body, this.config);
    }
    async delete(body) {
        var path = `/v2/subscription/pricing-plans/${body.pricingPlanReferenceCode}`;
        await delete body.pricingPlanReferenceCode;
        return await (0, http_1._delete)(path, {}, this.config);
    }
    async retrieveList(body) {
        var path = `/v2/subscription/products/${body.productReferenceCode}/pricing-plans`;
        await delete body.productReferenceCode;
        path += (0, hooks_1.generateQueryString)(body);
        return await (0, http_1._get)(path, this.config);
    }
    async retrieve(body) {
        var path = `/v2/subscription/pricing-plans/${body.pricingPlanReferenceCode}`;
        return await (0, http_1._get)(path, this.config);
    }
}
exports.SubscriptionPricingPlan = SubscriptionPricingPlan;
//# sourceMappingURL=subscription-pricing-plan.js.map