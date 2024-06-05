import mongoose from "mongoose";

const GameSchema = new mongoose.Schema({
    players: {
        type: [String],
        required: true,
    },
    wins: {
        type: Object,
        required: true,
    },
    losses: {
        type: Object,
        required: true,
    },
    draws: {
        type: Number,
        required: true,
    },
});

type TGame = mongoose.InferSchemaType<typeof GameSchema>;

const Game = mongoose.model("Game", GameSchema);

export { Game, TGame };
