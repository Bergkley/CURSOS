import express, { NextFunction, Request, Response } from "express"
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
})

function showPath(req: Request, res: Response, next:NextFunction) {
    console.log(req.path)
    next()
}

app.use(showPath)

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

app.get ("/api/product/:id/review/:reviewId", (req: Request, res: Response) => {
    console.log(req.params)
    return res.send("Id: " + req.params.id + " Review: " + req.params.reviewId)
})

function getUser(req: Request, res: Response) {
    console.log('Resgatando o usuário: ' + req.params.id)
    return res.send("Id: " + req.params.id)
}
app.get("/api/user/:id", getUser)

function checkUser(req: Request, res: Response, next:NextFunction) {
    if(req.params.id === "1"){
        console.log("Pode seguir!")
        next()
    }else {
        console.log("Não pode seguir!")
        
    }
}

app.get("/api/user/:id/acess",checkUser, (req: Request, res: Response) => {
    return res.json({msg: "Acesso concedido"})
})


app.get("/api/json", (req: Request, res: Response) => {
    return res.json({name: "shirts", price: 100})
})

app.get("/api/user/:id/details/:name", (req: Request<{id: string, name: string}>, res: Response<{status: boolean}>) => {
    console.log("id: " + req.params.id + " name: " + req.params.name)
    return res.json({status: true})
})

app.listen(3000, () => {
    console.log("Server is running");
})