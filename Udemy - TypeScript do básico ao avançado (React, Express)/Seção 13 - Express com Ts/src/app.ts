import express from "express"
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.post("/api/product", (req, res) => {
    console.log(req.body)
    return res.send('Produto adicionado');
});

app.listen(3000, () => {
    console.log("Server is running");
})