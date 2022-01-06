"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHashV2 = void 0;
const crypto_1 = require("crypto");
const generateHashV2 = (apiKey, separator, uri, randomString, secretKey, body = {}) => {
    var signature = (0, crypto_1.createHmac)("sha256", secretKey)
        .update(randomString + uri + JSON.stringify(body))
        .digest("hex");
    var authParams = [
        "apiKey" + separator + apiKey,
        "randomKey" + separator + randomString,
        "signature" + separator + signature,
    ];
    return Buffer.from(authParams.join("&")).toString("base64");
    /* return new Buffer(authParams.join("&")).toString("base64"); */
};
exports.generateHashV2 = generateHashV2;
//# sourceMappingURL=generateHashV2.js.map