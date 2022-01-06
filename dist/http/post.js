"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._post = void 0;
const tslib_1 = require("tslib");
const https_1 = (0, tslib_1.__importDefault)(require("https"));
const hooks_1 = require("../hooks");
const _post = async (path, body = {}, config) => {
    return new Promise((resolve, reject) => {
        var options = {
            hostname: config.uri.replace("https://", ""),
            path: path,
            method: "POST",
            port: 443,
            headers: {
                ...(0, hooks_1.generateHttpHeaders)(path, body, config),
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
        if (Object.keys(body).length > 0) {
            request.write(JSON.stringify(body));
        }
        request.end();
    });
};
exports._post = _post;
//# sourceMappingURL=post.js.map