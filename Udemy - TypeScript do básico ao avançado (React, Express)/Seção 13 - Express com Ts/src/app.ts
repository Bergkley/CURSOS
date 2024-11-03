import express, { Request, Response } from "express"
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.post("/api/product", (req, res) => {
    console.log(req.body)
    return res.send('Produto adicionado');
});

app.all("/api/product/check", (req, res) => {
    if(req.method === "POST"){
        return res.send("Inseriu alguma coisa");
    }else if(req.method === "GET"){ 
        return res.send("Leu alguma coisa");
    }else {
        return res.send("Algo deu errado");
    }
});

app.get("/api/interfaces", (req: Request, res: Response) => {
    return res.send("utilizando as interfaces")
})

app.get("/api/product/:id", (req: Request, res: Response) => {
    console.log(req.params)
    return res.send("Id: " + req.params.id)
})
app.get("/api/json", (req: Request, res: Response) => {
    return res.json({name: "shirts", price: 100})
})

app.listen(3000, () => {
    console.log("Server is running");
})