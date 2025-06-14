import express from 'express'

const app = express()
app.use(express.json())
const users = []

// criar usuario
app.post('/usuarios', (req, res) => {
    
    console.log(req.body)

    users.push(req.body)

    res.status(201).json(req.body)
})

// listar os usuários
app.get('/usuarios', (req,res) =>{
    res.status(200).json(users)
}) 

// servidor rodando na porta
app.listen(3000)

/*  Anotação:
    
    Criar API de Usuários
    
    - Criar um usuário (ok)
    - Listar todos usuários(ok)
    - Editar um usuário
    - Deletar um usuário

*/