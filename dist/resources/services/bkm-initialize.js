"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BkmInitialize = void 0;
const http_1 = require("../../http");
class BkmInitialize {
    config;
    constructor(config) {
        this.config = config;
    }
    async create(body) {
        var path = "/payment/bkm/initialize";
        return await (0, http_1._post)(path, body, this.config);
    }
}
exports.BkmInitialize = BkmInitialize;
//# sourceMappingURL=bkm-initialize.js.map