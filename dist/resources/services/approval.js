"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Approval = void 0;
const http_1 = require("../../http");
class Approval {
    config;
    constructor(config) {
        this.config = config;
    }
    async create(body) {
        var path = "/payment/iyzipos/installment";
        return await (0, http_1._post)(path, body, this.config);
    }
}
exports.Approval = Approval;
//# sourceMappingURL=approval.js.map