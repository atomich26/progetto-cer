import express from "express";
const APP = express();
const PORT = process.env.port;

APP.get('/', (req, res) => {
    res.send("Ciao mondo!");
});

APP.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
