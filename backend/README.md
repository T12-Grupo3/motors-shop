<div style='background-color:white'>

</div>
<h1 style='color: #00A48B'>Projeto Final - Modulo 06</h1>
<h2 style='color: #00A48B'>Projeto final do modulo 06 Back-end da Pagina de eCommerce de Venda e Leilão de Veiculos</h2>

<p>A Page é a melhor forma para vender carros e motos. O anunciante anuncia com facilidade, rapidez e segurança, no site de classificados de veículos! Ao anunciar seu carro e moto usado ou seminovo, ele aparece para milhares de compradores. Vender carroe moto está ficando cada vez maisfácil. </p>

<p>Com o objetivo de concluir o projeto final Modulo 6. Desenvolvemos o backend da aplicação como requesito para conclusão do modulo 6, o primeiro modulo de backend do curso de formação Web Full Stack da Kenzie Academy Brasil.</p>
 
<p>Nesse projeto foi desenvolvido uma CRUD(Create, Read, Update e delete) seguindo os conceitos de api RestFul, utilizando Typescript, Express, TypeOrm, PostgreSQL, Docker e testes unitários com Jest. </p>
 
<p>Nossa API possui dois tipos de usuários: o user comum (Comprador) que tem poder limitado nas rotas, podendo criar seu perfil, comentar anuncios e comprar veiculos, user administrador (Anunciante) que possui maior poder nas rotas, podendo Criar anúncios, fazer alterações que os outros usuários comuns não pode. </p>

<details>
  <summary><h2>Projeto Full Stack - Documentação da API</h2>
  <p>Para acessar a documentação da API, é necessáriio rodar o servidor Back-end, utilizando o comando "yarn dev". Em seguida acessar o endereço no link abaixo.</p>
  <a href="http://localhost:8000/api-docs/#/"> Clique Aqui para conhecer a Documentação da APi.</a>
  </summary>
</details>

<br>

## Tecnologias Utilizada

<div style='display:flex; gap: 5px;'><br>
  
 <img align="center" alt="node.js" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">

 <img align="center" alt="express.js" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">

  <img align="center" alt="jest" src="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white">

  <img align="center" alt="Typescript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">

   
</div></br>

## Ferramentas Utilizadas

<div style='display:flex; gap: 5px;'><br>
 <img align="center" alt="jira" src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white">  
 
</div></br>

## Equipe

<ul>
<li><a href="https://github.com/Daniel-MatosC/Daniel-MatosC" >Daniel Matos</a></li>
<li><a href="https://github.com/janamachado">Jana Machado</a></li>
<li><a href="https://github.com/reisquaza">João Victor Reis</a></li>
<li><a href="https://github.com/marcuspvh">Marcus Roberto Ribeiro</li>
</ul>
</br>

<div style='color:white'>

## Orientações para iniciar o Projeto

<p>Para inciar este projeto, é necessário instalar as dependências, que serão utilizadas nos testes. Portanto utilize o comando abaixo para instalar tais dependências:</p>


````
yarn install
````


**Atenção:** é necessário utilizar o `yarn` pois esse projeto foi iniciado com esse gerenciador de pacotes.

Para verificar se já possui o gerenciador yarn instalado utilize o seguinte comando:

````
yarn --version
````

Caso não possua o yarn instalado, utilize o comando abaixo para instalar globalmente na sua máquina:

````
npm install --global yarn
````
<br>

<br>



## Para rodar a aplicação localmente

### Faça o clone deste repositório:
```bash
  git@github.com:T12-Grupo3/motors-shop.git
```
### Acesse o diretório nomeado >frontend<:
```bash
  cd backend
```

### Execute o comando para instalação das dependências:
```bash
  npm install
```
ou
```bash
  yarn
```

### Inicie o servidor local executando o seguinte comando:
```bash
  npm start
```
ou
```bash
  yarn start
```
Pronto! A interface irá abrir no seu navegador padrão.

## Executar a entrega em `localhost`
<br>
**Configure as variáveis de ambiente no seu .env**, passando as credenciais corretas para conectar em seu banco local

E altere a variável **`DB_HOST`** para **`localhost`**

Com isso feito, para rodar sua aplicação, basta utilizar o comando
````
yarn dev
````

<br>

## Rotas da aplicação
Sua aplicação irá abrir na página principal, onde é possível visualizar anúncios sem necessitar se cadastrar previamente.
Para as outras rotas é necessário acrescentar os endpoints abaixo, ao final da URL que aparecerá no seu navegador.

### Rota para criar, visualizar, editar e deletar anúncios no INSOMNIA:
```bash
  /adverts
```

### Rota para criar, visualizar, editar e deletar imagens do anúncio no INSOMNIA:
```bash
  /imageadverts
```

### Exemplo de rotas:
```bash
  localhost:8000/adverts
  localhost:8000/imageadverts
```
</div>