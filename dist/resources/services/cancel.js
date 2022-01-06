"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cancel = void 0;
const http_1 = require("../../http");
class Cancel {
    config;
    constructor(config) {
        this.config = config;
    }
    async create(body) {
        var path = "/payment/cancel";
        return await (0, http_1._post)(path, body, this.config);
    }
}
exports.Cancel = Cancel;
//# sourceMappingURL=cancel.js.map