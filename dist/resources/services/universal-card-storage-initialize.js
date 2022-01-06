"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniversalCardStorageInitialize = void 0;
const http_1 = require("../../http");
class UniversalCardStorageInitialize {
    config;
    constructor(config) {
        this.config = config;
    }
    async retrieve(body) {
        var path = "/payment/iyzipos/checkoutform/auth/ecom/detail";
        return await (0, http_1._post)(path, body, this.config);
    }
}
exports.UniversalCardStorageInitialize = UniversalCardStorageInitialize;
//# sourceMappingURL=universal-card-storage-initialize.js.map