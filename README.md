# Instagram com Gemini

Este projeto é uma simulação simplificada do Instagram, com funcionalidades básicas de postagem e uma integração especial com a API do Google Gemini.

## Funcionalidades Principais

* **Postagens:**
    * Criação de posts com imagens.
* **Integração com Google Gemini:**
    * Descrição automática de imagens usando a API do Google Gemini.
    * Legendas geradas por IA para as fotos publicadas.

## Tecnologias Utilizadas

* JavaScript
* Node.js
* API do Google Gemini
* MongoDB 

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

* Node.js
* npm etc
* Uma chave de API do Google Gemini (consulte a documentação do Google Gemini para obter uma chave).

## Configuração

1.  Clone este repositório:

    ```bash
    git clone https://github.com/LucasSouza67/instaLike_back (https://github.com/dolthub/dolt)
    cd instaLike_back
    ```

2.  Instale as dependências:

    ```bash
     npm install 
    ```

3.  Configure as variáveis de ambiente:

    * Crie um arquivo `.env` na raiz do projeto.
    * Adicione sua chave de API do Google Gemini:

        ```
        GEMINI_API_KEY=[sua_chave_de_api]
        ```

4.  Execute o projeto:

    ```bash
     npm start
    ```

## Como Usar

1.  Abra o navegador e acesse `http://localhost:[porta]`.
2.  Crie uma nova postagem, selecionando uma imagem.
3.  Aguarde a geração da legenda pela API do Google Gemini.
4.  Visualize sua postagem no feed.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MTI - consulte o arquivo `LICENSE.md` para obter detalhes.

## Autor

* Lucas Souza - LucasSouza67

## Agradecimentos

* A equipe do Google Gemini pela excelente API.
* Aos criadores das bibliotecas e frameworks utilizados neste projeto.
* A equipe e professores da Alura

## Observações

* Este é um projeto para fins de estudo e demonstração.
* A precisão das descrições geradas pela API do Google Gemini pode variar.

## Melhorias futuras

* Implementação de login de usuário.
* Funcionalidade de seguir outros usuários.
* Melhorias na interface do usuário.
* Implementação de comentários e curtidas.
