"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinNumber = void 0;
const http_1 = require("../../http");
class BinNumber {
    config;
    constructor(config) {
        this.config = config;
    }
    async retrieve(body) {
        var path = "/payment/bin/check";
        return await (0, http_1._post)(path, body, this.config);
    }
}
exports.BinNumber = BinNumber;
//# sourceMappingURL=bin-number.js.map