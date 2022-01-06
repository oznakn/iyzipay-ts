"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apm = void 0;
const http_1 = require("../../http");
class Apm {
    config;
    constructor(config) {
        this.config = config;
    }
    async create(body) {
        var path = "/payment/apm/initialize";
        return await (0, http_1._post)(path, body, this.config);
    }
    async retrieve(body) {
        var path = "/payment/apm/retrieve";
        return await (0, http_1._post)(path, body, this.config);
    }
}
exports.Apm = Apm;
//# sourceMappingURL=apm.js.map