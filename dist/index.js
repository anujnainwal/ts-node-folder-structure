"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const PORT = parseInt(process.env.PORT || "5050", 10);
app_1.default.listen(() => {
    console.log(`Server listening on ${PORT}. \nServer url: ${process.env.BASE_URL}:${PORT}`);
});
