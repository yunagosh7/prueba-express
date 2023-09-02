"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 5000;
app.get("/", (req, res) => {
    const msg = {
        message: "Hola mundo y Juan"
    };
    res.send(JSON.stringify(msg));
});
app.post("/add", (req, res) => {
    let data = req.body;
    console.log(data);
    res.send(data);
});
app.listen(PORT, () => {
    console.log("App listen on port: ", PORT);
});
