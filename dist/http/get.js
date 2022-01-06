"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._get = void 0;
const tslib_1 = require("tslib");
const https_1 = (0, tslib_1.__importDefault)(require("https"));
const hooks_1 = require("../hooks");
const _get = async (path, config) => {
    return new Promise((resolve, reject) => {
        var options = {
            hostname: config.uri.replace("https://", ""),
            path: path,
            method: "GET",
            port: 443,
            headers: {
                ...(0, hooks_1.generateHttpHeaders)(path, {}, config),
            },
        };
        var request = https_1.default.request(options, (res) => {
            if (res?.statusCode < 200 || res?.statusCode >= 300) {
                return reject(new Error("Status Code=" + res.statusCode));
            }
            var data = "";
            res.on("data", (chunk) => (data += chunk));
            res.on("end", () => {
                try {
                    data = JSON.parse(data);
                }
                catch (error) {
                    reject(error);
                }
                resolve(data);
            });
        });
        request.on("error", (err) => reject(err));
        request.end();
    });
};
exports._get = _get;
//# sourceMappingURL=get.js.map