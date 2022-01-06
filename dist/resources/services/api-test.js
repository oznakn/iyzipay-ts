"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiTest = void 0;
const http_1 = require("../../http");
class ApiTest {
    config;
    constructor(config) {
        this.config = config;
    }
    async retrieve() {
        return await (0, http_1._get)("/payment/test", this.config);
    }
}
exports.ApiTest = ApiTest;
//# sourceMappingURL=api-test.js.map