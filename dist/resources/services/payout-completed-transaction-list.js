"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayoutCompletedTransactionList = void 0;
const http_1 = require("../../http");
class PayoutCompletedTransactionList {
    config;
    constructor(config) {
        this.config = config;
    }
    async retrieve(body) {
        var path = "/reporting/settlement/payoutcompleted";
        return await (0, http_1._post)(path, body, this.config);
    }
}
exports.PayoutCompletedTransactionList = PayoutCompletedTransactionList;
//# sourceMappingURL=payout-completed-transaction-list.js.map