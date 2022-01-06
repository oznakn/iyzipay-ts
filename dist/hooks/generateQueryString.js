"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateQueryString = void 0;
const querystring_1 = require("querystring");
const generateQueryString = (obj = {}) => {
    return "?" + (0, querystring_1.stringify)(obj);
};
exports.generateQueryString = generateQueryString;
//# sourceMappingURL=generateQueryString.js.map