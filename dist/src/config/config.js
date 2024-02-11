"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const whiteList = ["http://localhost:8080", "http://localhost:3000", ""];
const corsOption = {
    origin: function (origin, callback) {
        if (whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by cors."));
        }
    }
};
exports.default = corsOption;
