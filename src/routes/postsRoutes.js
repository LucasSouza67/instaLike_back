import express from "express";
import multer from "multer";
import { atualizarNovoPost, listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsControllers.js";
import cors from "cors";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSucessStatus: 200
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

//const upload = multer({dest:"./uploads"})

const routes = (app) => {
    app.use(express.json()); // indica que a aplicacao converte a estrutura em um Json
    app.use(cors(corsOptions));
    app.get("/posts", listarPosts); // rota para buscar os posts
    app.post("/posts", postarNovoPost); // rota para criar um novo post, chama a função de criação de posts 
    app.post("/upload", upload.single("imagem"), uploadImagem); // chama a função controladora para processamento da imagem 
    app.put("/upload/:id", atualizarNovoPost); // rota para alterar um post, chama a função de alteração 
}

export default routes;
