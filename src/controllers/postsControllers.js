import {getTodosPosts, criarPost, atualizarPost} from "../models/postsModels.js";
import fs from "fs";
import gerarDescricaoComGemini from "../services/geminiService.js";

export async function listarPosts(req, res) {
    const posts =  await getTodosPosts(); // chama a função para buscar os posts
    res.status(200).json(posts); // envia uma resposta de "ok" (200) e os posts
}

export async function postarNovoPost(req, res) {
    const novoPost = req.body; 

    try{
        const postCriado = await criarPost(novoPost) // função para criar um novo post
        res.status(200).json(postCriado); // envia uma resposta de "ok" (200) 
    }catch (erro){
        console.error(erro.message)
        res.status(500).json({"ERRO": "Falha na requisição"})
    }
}

export async function uploadImagem(req, res) {
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: "" 
    }; 

    try{
        const postCriado = await criarPost(novoPost) // função para criar um novo post
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path, imagemAtualizada)
        res.status(200).json(postCriado); // envia uma resposta de "ok" (200) 
    }catch (erro){
        console.error(erro.message)
        res.status(500).json({"ERRO": "Falha na requisição"})
    }
}
export async function atualizarNovoPost(req, res) {
    const id = req.params.id; 
    const urlImagem = `http://localhost:3000/${id}.png`
    try{
        const imageBuffer = fs.readFileSync(`uploads/${id}.png`)
        const descricao = await gerarDescricaoComGemini(imageBuffer)
        const post = {
            imgUrl: urlImagem,
            descricao: descricao,
            alt: req.body.alt
        }
        const postCriado = await atualizarPost(id, post) // função para alterar um post
        res.status(200).json(postCriado); // envia uma resposta de "ok" (200) 
    }catch (erro){
        console.error(erro.message)
        res.status(500).json({"ERRO": "Falha na requisição"})
    }
}
