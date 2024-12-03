import express from 'express'

const app = express()

app.get('/', function(req, res){
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Site da loja</title>
    </head>
    <body>
        <h1>Site da loja</h1>
        <ul>
            <li>produto 1</li>
            <li>produto 2</li>
            <li>produto 3</li>
        </ul>
    
        <p><b>Obrigado por acessar o site!</b></p>
    </body>
    </html>`)
})

app.listen(3000, ()=>{
    console.log("Servidor rodando em http:localhost:3000")
})