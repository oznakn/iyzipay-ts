"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const http_1 = require("../../http");
class Card {
    config;
    constructor(config) {
        this.config = config;
    }
    path = "/cardstorage/card";
    async create(body) {
        return await (0, http_1._post)(this.path, body, this.config);
    }
    async delete(body) {
        return await (0, http_1._delete)(this.path, body, this.config);
    }
}
exports.Card = Card;
//# sourceMappingURL=card.js.map