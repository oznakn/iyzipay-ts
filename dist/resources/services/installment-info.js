"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstallmentInfo = void 0;
const http_1 = require("../../http");
class InstallmentInfo {
    config;
    constructor(config) {
        this.config = config;
    }
    async retrieve(body) {
        var path = "/payment/iyzipos/installment";
        return await (0, http_1._post)(path, body, this.config);
    }
}
exports.InstallmentInfo = InstallmentInfo;
//# sourceMappingURL=installment-info.js.map