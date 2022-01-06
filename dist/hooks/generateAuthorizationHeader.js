"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAuthorizationHeader = void 0;
const generateHash_1 = require("./generateHash");
const generateAuthorizationHeader = (iyziWsHeaderName, apiKey, separator, secretKey, body, randomString) => {
    return (iyziWsHeaderName +
        " " +
        apiKey +
        separator +
        (0, generateHash_1.generateHash)(apiKey, randomString, secretKey, body));
};
exports.generateAuthorizationHeader = generateAuthorizationHeader;
//# sourceMappingURL=generateAuthorizationHeader.js.map