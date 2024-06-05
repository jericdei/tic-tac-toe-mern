import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { Game } from "./models";

dotenv.config();

const app = express();

app.use(cors()).use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "The API works!", randomNumber: Math.random() });
});

app.get("/games", async (req, res) => {
    const games = await Game.find();

    res.json({
        games,
    });
});

app.post("/games", async (req, res) => {
    const { stats } = req.body;

    const game = await Game.create(stats);

    res.json({
        game,
    });
});

const port = process.env.APP_PORT || 3000;

async function main() {
    try {
        const url = process.env.MONGODB_URL;

        if (!url) {
            throw new Error("MONGODB_URL is not set!");
        }

        await mongoose.connect(url);

        app.listen(port, () => {
            console.log(`Listening on port ${port}!`);
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

main();
