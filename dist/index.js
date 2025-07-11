"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const db_1 = require("./config/db");
const config_1 = require("./config");
async function start() {
    await (0, db_1.initDB)();
    app_1.default.listen(config_1.PORT, () => {
        console.log(`Server running on port ${config_1.PORT}`);
    });
}
start();
