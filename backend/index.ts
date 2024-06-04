import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { Game } from "./models";

dotenv.config();

const app = express();

app.use(cors()).use(express.json());

app.get("/", (req, res) => {
    res.send("Hello Worldz!");
});

app.post("/games", async (req, res) => {
    const { stats } = req.body;

    console.log(stats);

    const game = await Game.create(stats);

    console.log(game);
});

const port = process.env.APP_PORT || 3000;

async function main() {
    try {
        await mongoose.connect(process.env.MONGODB_URL as string);

        app.listen(port, () => {
            console.log(`Listening on port ${port}!`);
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

main();
