import express from 'express'
import cors from 'cors'
import { PrismaClient } from './generated/prisma/index.js';

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors()) // acessar qualquer pagina


// criar usuario
app.post('/usuarios', async (req, res) => {

    await prisma.user.create({
        data: {
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            email: req.body.email,
            setor: req.body.setor
        }
    });


    res.status(201).json(req.body)
})

// editar usuário
app.put('/usuarios/:id', async (req, res) => {

    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            email: req.body.email,
            setor: req.body.setor
        }
    });


    res.status(201).json(req.body)
})

// listar os usuários
app.get('/usuarios', async (req, res) => {
    try {
        let users = []

        if (req.query.nome) {
            users = await prisma.user.findMany({
                where: {
                        nome: req.query.nome,
                        sobrenome: req.query.sobrenome,
                        email: req.query.email,
                        setor: req.query.setor,
                }
            });
        } else {
            users = await prisma.user.findMany();
        }

        res.status(200).json(users);
    } catch (error) {
        console.log('Erro ao buscar usuários:', error);
        res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
});

// deletar usuário
app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ message: 'Usuário deletado com Sucesso!' })
})

// servidor rodando na porta
app.listen(3000)

/*  Anotação:
    
    Criar API de Usuários
    
    - Criar um usuário(ok)
    - Listar todos usuários(ok)
    - Editar um usuário(ok)
    - Deletar um usuário (ok)
*/