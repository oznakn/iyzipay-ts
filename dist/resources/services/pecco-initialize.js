"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeccoInitialize = void 0;
const http_1 = require("../../http");
class PeccoInitialize {
    config;
    constructor(config) {
        this.config = config;
    }
    async create(body) {
        var path = "/payment/pecco/initialize";
        return await (0, http_1._post)(path, body, this.config);
    }
}
exports.PeccoInitialize = PeccoInitialize;
//# sourceMappingURL=pecco-initialize.js.map