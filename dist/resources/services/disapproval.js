"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disapproval = void 0;
const http_1 = require("../../http");
class Disapproval {
    config;
    constructor(config) {
        this.config = config;
    }
    async create(body) {
        var path = "/payment/iyzipos/item/disapprove";
        return await (0, http_1._post)(path, body, this.config);
    }
}
exports.Disapproval = Disapproval;
//# sourceMappingURL=disapproval.js.map