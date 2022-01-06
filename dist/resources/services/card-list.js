"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardList = void 0;
const http_1 = require("../../http");
class CardList {
    config;
    constructor(config) {
        this.config = config;
    }
    async retrieve(body) {
        var path = "/cardstorage/cards";
        return await (0, http_1._post)(path, body, this.config);
    }
}
exports.CardList = CardList;
//# sourceMappingURL=card-list.js.map