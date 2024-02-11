"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./src/config/config"));
console.log("NODE_ENV: ", process.env.NODE_ENVIROMENT);
const app = (0, express_1.default)();
//app configuration
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)(config_1.default));
app.use((req, res) => {
    res.removeHeader("x-powered-by");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE"); // If needed
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type"); // If needed
    // res.setHeader('Access-Control-Allow-Credentials'); // If needed
});
app.get("/", (req, res) => {
    return res.status(200).json({ message: "Ok server is online." });
});
exports.default = app;
