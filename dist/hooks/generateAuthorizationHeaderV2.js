"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAuthorizationHeaderV2 = void 0;
const _1 = require(".");
const generateAuthorizationHeaderV2 = (iyziWsHeaderName, apiKey, separator, secretKey, uri, body = {}, randomString) => {
    return (iyziWsHeaderName +
        " " +
        (0, _1.generateHashV2)(apiKey, separator, uri, randomString, secretKey, body));
};
exports.generateAuthorizationHeaderV2 = generateAuthorizationHeaderV2;
//# sourceMappingURL=generateAuthorizationHeaderV2.js.map