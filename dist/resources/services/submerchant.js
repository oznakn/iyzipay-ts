"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubMerchant = void 0;
const http_1 = require("../../http");
class SubMerchant {
    config;
    constructor(config) {
        this.config = config;
    }
    path = "/onboarding/submerchant";
    async create(body) {
        return await (0, http_1._post)(this.path, body, this.config);
    }
    async update(body) {
        return await (0, http_1._put)(this.path, body, this.config);
    }
    async retrieve(body) {
        this.path += "/detail";
        return await (0, http_1._post)(this.path, body, this.config);
    }
}
exports.SubMerchant = SubMerchant;
//# sourceMappingURL=submerchant.js.map