"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomString = void 0;
const generateRandomString = (stringSize) => {
    return process.hrtime()[0] + Math.random().toString(stringSize).slice(2);
};
exports.generateRandomString = generateRandomString;
//# sourceMappingURL=generateRandomString.js.map