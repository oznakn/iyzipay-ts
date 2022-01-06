"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHash = void 0;
const crypto_1 = require("crypto");
const generateHash = (apiKey, randomString, secretKey, requestString) => {
    const shaSum = (0, crypto_1.createHash)("sha1");
    shaSum.update(apiKey + randomString + secretKey + requestString, "utf-8");
    return shaSum.digest("base64");
};
exports.generateHash = generateHash;
//# sourceMappingURL=generateHash.js.map