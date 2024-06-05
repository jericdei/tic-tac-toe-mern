"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const models_1 = require("./models");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)()).use(express_1.default.json());
app.get("/", (req, res) => {
    res.json({ message: "The API works!", randomNumber: Math.random() });
});
app.get("/games", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const games = yield models_1.Game.find().sort({ _id: -1 });
    res.json({
        games,
    });
}));
app.post("/games", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { stats } = req.body;
    const game = yield models_1.Game.create(stats);
    res.json({
        game,
    });
}));
const port = process.env.PORT || 4000;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const url = process.env.MONGODB_URL;
            if (!url) {
                throw new Error("MONGODB_URL is not set!");
            }
            yield mongoose_1.default.connect(url);
            app.listen(port, () => {
                console.log(`Listening on port ${port}!`);
            });
        }
        catch (error) {
            console.error(error);
            process.exit(1);
        }
    });
}
main();
