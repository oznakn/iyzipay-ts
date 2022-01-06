"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreedsInitialize = void 0;
const http_1 = require("../../http");
class ThreedsInitialize {
    config;
    constructor(config) {
        this.config = config;
    }
    async create(body) {
        var path = "/payment/3dsecure/initialize";
        return await (0, http_1._post)(path, body, this.config);
    }
}
exports.ThreedsInitialize = ThreedsInitialize;
//# sourceMappingURL=threeds-initialize.js.map