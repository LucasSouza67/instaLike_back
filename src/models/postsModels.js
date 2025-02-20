import { ObjectId } from 'mongodb';
import conectarAoBanco from '../config/dbconfig.js'; // lembre de colocar o . js ao fim da string, que é necessario no node

// conecta ao banco de dados utilizando a string de conexao como variavel
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

// funcao assincrona para buscar todos os posts do banco de dados 
export async function getTodosPosts(){
    const db = conexao.db("imercao_instabyte"); // seleciona o banco imercao_instabytes
    const colecao = db.collection("posts"); // seleciona a colecao posts
    return colecao.find().toArray(); // retorna um array com todos os documentos da colecao
}

export async function criarPost(novoPost) {
    const db = conexao.db("imercao_instabyte"); // seleciona o banco imercao_instabytes
    const colecao = db.collection("posts"); // seleciona a colecao posts
    return colecao.insertOne(novoPost) // cria um novo post
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imercao_instabyte");
    const colecao = db.collection("posts");
    const objId = ObjectId.createFromHexString(id); // guarda o ID do post a ser atualizado 
    return colecao.updateOne({_id: new ObjectId(objId)}, {$set:novoPost}); // indica pelo ID o post que sera atualizado
}