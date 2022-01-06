"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHttpHeaders = void 0;
const enum_1 = require("../enum");
const hooks_1 = require("../hooks");
const generateHttpHeaders = (path, body = {}, config) => {
    const v2AuthUrlRegex = new RegExp(/\/v2\//);
    const randomString = (0, hooks_1.generateRandomString)(8);
    var headers = {
        Authorization: v2AuthUrlRegex.test(path)
            ? (0, hooks_1.generateAuthorizationHeaderV2)(enum_1.RESOURCE.IYZI_WS_HEADER_NAME_V2, config.apiKey, enum_1.RESOURCE.SEPARATOR, config.secretKey, path, body, randomString)
            : (0, hooks_1.generateAuthorizationHeader)(enum_1.RESOURCE.IYZI_WS_HEADER_NAME, config.apiKey, enum_1.RESOURCE.SEPARATOR, config.secretKey, (0, hooks_1.generateRequestString)(body), randomString),
        "x-iyzi-rnd": randomString,
        "x-iyzi-client-version": "iyzipay-node-2.0.48",
        "Content-Type": "application/json",
        Connection: "keep-alive",
    };
    return headers;
};
exports.generateHttpHeaders = generateHttpHeaders;
//# sourceMappingURL=generateHttpHeaders.js.map