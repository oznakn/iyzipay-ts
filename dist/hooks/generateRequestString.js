"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRequestString = void 0;
const generateRequestString = (body = {}) => {
    if (typeof body === "undefined") {
        return [];
    }
    else {
        var isArray = Array.isArray(body);
        var requestString = "[";
        for (let i in body) {
            var val = body[i];
            if (typeof val !== "undefined" && typeof val !== "function") {
                if (!isArray) {
                    requestString += i + "=";
                }
                if (typeof val === "object") {
                    requestString += (0, exports.generateRequestString)(val);
                }
                else {
                    requestString += val;
                }
                requestString += isArray ? ", " : ",";
            }
        }
        requestString = requestString.slice(0, isArray ? -2 : -1);
        requestString += "]";
        return requestString;
    }
};
exports.generateRequestString = generateRequestString;
//# sourceMappingURL=generateRequestString.js.map