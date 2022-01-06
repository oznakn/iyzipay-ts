"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bkm = void 0;
const http_1 = require("../../http");
class Bkm {
    config;
    constructor(config) {
        this.config = config;
    }
    async retrieve(body) {
        var path = "/payment/bkm/auth/detail";
        return await (0, http_1._post)(path, body, this.config);
    }
}
exports.Bkm = Bkm;
//# sourceMappingURL=bkm.js.map