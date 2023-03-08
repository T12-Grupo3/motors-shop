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

### Rota para criar, visualizar, editar e deletar Anunciantes e Compradores no INSOMNIA:
```bash
  /users
```

### Rota para criar, visualizar, editar e deletar anúncios no INSOMNIA:
```bash
  /adverts
```

### Rota para criar, visualizar, editar e deletar comentários nos anúncios no INSOMNIA:
```bash
  /comments
```

### Exemplo de rotas:
```bash
  localhost:8000/users
  localhost:8000/adverts
  localhost:8000/comments
```
</div>

<p align="center">
  <a href="#endpoints">Endpoints</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

## **Endpoints**

A API tem um total de 17 endpoints, sendo em volta principalmente do usuário (dev) - podendo cadastrar seu perfil, anuncios e comentários. <br/>

<a style="display:flex; justify-content:center" href="https://insomnia.rest/run/?label=Kenzie%20Hub&uri=https%3A%2F%2Fgithub.com%2FKenzie-Academy-Brasil-Developers%2Fkenziehub-api%2Fblob%2Fmaster%2FInsomnia_kenzie_hub.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>

<blockquote> Para importar o JSON no Insomnia é só clicar no botão "Run in Insomnia". Depois é só seguir os passos que ele irá importar todos os endpoints em seu insomnia.
</blockquote>
<br>

A url base da API é https://localhost.8000

## Rotas que não precisam de autenticação

<h2 align ='center'> Listando anuncios </h2>

Nessa aplicação o usuário sem fazer login ou se cadastrar pode ver os anuncios já cadastrados na plataforma, na API podemos acessar a lista dessa forma:
Aqui conseguimos ver os os anuncios e anunciantes cadastrados.

`GET /adverts - FORMATO DA RESPOSTA - STATUS 200`

```json
[
	{
		"id": "791518e6-9d1a-4e7b-80ca-9a2574c7c6fb",
		"title_adverts": "Pajero TR4 MARCUSSS",
		"year_adverts": "2012",
		"type_adverts": "sell",
		"type_veicule": "car",
		"kilometers_adverts": "101000",
		"price_adverts": 10000,
		"description_adverts": "Carro em execelente estado de conservação",
		"isAvailable": true,
		"createdAt_adverts": "2023-03-07T23:19:49.936Z",
		"updatedAt_adverts": "2023-03-07T23:19:49.936Z",
		"cover_image_adverts": "https://hips.hearstapps.com/hmg-prod/images/2023-mclaren-artura-101-1655218102.jpg?crop=1.00xw:0.847xh;0,0.153xh&resize=1200:*",
		"user": {
			"id": "dcdad556-e984-4c1b-9070-d5761c7cc3f3",
			"name": "Marcus anunciante",
			"email": "marcuspvh@gmail.com",
			"cpf": "09870844880",
			"phone_number": "981158855",
			"description_user": "Anu8nciante Nota 10",
			"birth_date": "1971-04-20T04:00:00.000Z",
			"createdAt": "2023-03-07T18:13:24.464Z",
			"updatedAt": "2023-03-07T18:13:24.464Z",
			"isAdm": true,
			"isActive": true,
			"address": {
				"id": "6241ad8d-a0b9-4080-8618-e74310a21d5c",
				"street": "Rua Doctor Pires de camargo",
				"zipCode": "18155000",
				"number": "68",
				"city": "Piedade",
				"state": "SP",
				"complement": "Casa"
			},
			"adverts": [
				{
					"id": "791518e6-9d1a-4e7b-80ca-9a2574c7c6fb",
					"title_adverts": "Pajero TR4 MARCUSSS",
					"year_adverts": "2012",
					"type_adverts": "sell",
					"type_veicule": "car",
					"kilometers_adverts": "101000",
					"price_adverts": 10000,
					"description_adverts": "Carro em execelente estado de conservação",
					"isAvailable": true,
					"createdAt_adverts": "2023-03-07T23:19:49.936Z",
					"updatedAt_adverts": "2023-03-07T23:19:49.936Z",
					"cover_image_adverts": "https://hips.hearstapps.com/hmg-prod/images/2023-mclaren-artura-101-1655218102.jpg?crop=1.00xw:0.847xh;0,0.153xh&resize=1200:*"
				},
				{
					"id": "e9629b98-497d-4219-bbc2-0bf82a8fd18f",
					"title_adverts": "Ferrary do Marcus",
					"year_adverts": "2020",
					"type_adverts": "sell",
					"type_veicule": "car",
					"kilometers_adverts": "100",
					"price_adverts": 701000,
					"description_adverts": "Ferray testarosa linda",
					"isAvailable": true,
					"createdAt_adverts": "2023-03-07T19:10:47.318Z",
					"updatedAt_adverts": "2023-03-07T19:16:47.033Z",
					"cover_image_adverts": "https://s2.glbimg.com/2CK1xEw_2FlMfZS2k9SnbrdbwB0=/fit-in/940x590/e.glbimg.com/og/ed/f/original/2013/03/05/laferrari4.jpg"
				},
				{
					"id": "5ae98b55-6e5b-4582-b58f-329a01685d6a",
					"title_adverts": "Hayabusa MARCUS",
					"year_adverts": "2012",
					"type_adverts": "sell",
					"type_veicule": "motorcycle",
					"kilometers_adverts": "101000",
					"price_adverts": 10000,
					"description_adverts": "Carro em execelente estado de conservação",
					"isAvailable": true,
					"createdAt_adverts": "2023-03-07T19:02:12.369Z",
					"updatedAt_adverts": "2023-03-07T19:02:12.369Z",
					"cover_image_adverts": "https://motornoticias.com.br/wp-content/uploads/2022/01/Suzuki-HAYABUSA-2022-nova-cor-e-divulgada.png"
				}
			],
			"comments": []
		},
		"imageAdverts": [
			{
				"id": "6db312df-6152-4008-983e-032699022022",
				"galery_image": "https://i.ytimg.com/vi/bMtYe68UzMQ/maxresdefault.jpg"
			},
			{
				"id": "25b5492e-0be2-410c-b4b8-c360caa9dde2",
				"galery_image": "https://img1.icarros.com/dbimg/galeriaimgmodelo/8/9117_1.jpg"
			},
			{
				"id": "1f0bed46-d8e9-434f-adcc-0fe186636c87",
				"galery_image": "https://revistacarro.com.br/wp-content/uploads/2018/05/nfgnfnfnfnfnfnf.jpg"
			},
			{
				"id": "cd0264d9-edb1-4d34-833d-8ac794289dee",
				"galery_image": "https://quatrorodas.abril.com.br/wp-content/uploads/2016/11/570d676282bee1142b009053qr-597-tr4-01.jpeg?quality=70&strip=all&strip=all"
			}
		]
	},
	{
		"id": "e9629b98-497d-4219-bbc2-0bf82a8fd18f",
		"title_adverts": "Ferrary do Marcus",
		"year_adverts": "2020",
		"type_adverts": "sell",
		"type_veicule": "car",
		"kilometers_adverts": "100",
		"price_adverts": 701000,
		"description_adverts": "Ferray testarosa linda",
		"isAvailable": true,
		"createdAt_adverts": "2023-03-07T19:10:47.318Z",
		"updatedAt_adverts": "2023-03-07T19:16:47.033Z",
		"cover_image_adverts": "https://s2.glbimg.com/2CK1xEw_2FlMfZS2k9SnbrdbwB0=/fit-in/940x590/e.glbimg.com/og/ed/f/original/2013/03/05/laferrari4.jpg",
		"user": {
			"id": "dcdad556-e984-4c1b-9070-d5761c7cc3f3",
			"name": "Marcus anunciante",
			"email": "marcuspvh@gmail.com",
			"cpf": "09870844880",
			"phone_number": "981158855",
			"description_user": "Anu8nciante Nota 10",
			"birth_date": "1971-04-20T04:00:00.000Z",
			"createdAt": "2023-03-07T18:13:24.464Z",
			"updatedAt": "2023-03-07T18:13:24.464Z",
			"isAdm": true,
			"isActive": true,
			"address": {
				"id": "6241ad8d-a0b9-4080-8618-e74310a21d5c",
				"street": "Rua Doctor Pires de camargo",
				"zipCode": "18155000",
				"number": "68",
				"city": "Piedade",
				"state": "SP",
				"complement": "Casa"
			},
			"adverts": [
				{
					"id": "791518e6-9d1a-4e7b-80ca-9a2574c7c6fb",
					"title_adverts": "Pajero TR4 MARCUSSS",
					"year_adverts": "2012",
					"type_adverts": "sell",
					"type_veicule": "car",
					"kilometers_adverts": "101000",
					"price_adverts": 10000,
					"description_adverts": "Carro em execelente estado de conservação",
					"isAvailable": true,
					"createdAt_adverts": "2023-03-07T23:19:49.936Z",
					"updatedAt_adverts": "2023-03-07T23:19:49.936Z",
					"cover_image_adverts": "https://hips.hearstapps.com/hmg-prod/images/2023-mclaren-artura-101-1655218102.jpg?crop=1.00xw:0.847xh;0,0.153xh&resize=1200:*"
				},
				{
					"id": "e9629b98-497d-4219-bbc2-0bf82a8fd18f",
					"title_adverts": "Ferrary do Marcus",
					"year_adverts": "2020",
					"type_adverts": "sell",
					"type_veicule": "car",
					"kilometers_adverts": "100",
					"price_adverts": 701000,
					"description_adverts": "Ferray testarosa linda",
					"isAvailable": true,
					"createdAt_adverts": "2023-03-07T19:10:47.318Z",
					"updatedAt_adverts": "2023-03-07T19:16:47.033Z",
					"cover_image_adverts": "https://s2.glbimg.com/2CK1xEw_2FlMfZS2k9SnbrdbwB0=/fit-in/940x590/e.glbimg.com/og/ed/f/original/2013/03/05/laferrari4.jpg"
				},
				{
					"id": "5ae98b55-6e5b-4582-b58f-329a01685d6a",
					"title_adverts": "Hayabusa MARCUS",
					"year_adverts": "2012",
					"type_adverts": "sell",
					"type_veicule": "motorcycle",
					"kilometers_adverts": "101000",
					"price_adverts": 10000,
					"description_adverts": "Carro em execelente estado de conservação",
					"isAvailable": true,
					"createdAt_adverts": "2023-03-07T19:02:12.369Z",
					"updatedAt_adverts": "2023-03-07T19:02:12.369Z",
					"cover_image_adverts": "https://motornoticias.com.br/wp-content/uploads/2022/01/Suzuki-HAYABUSA-2022-nova-cor-e-divulgada.png"
				}
			],
			"comments": []
		},
		"imageAdverts": []
	},
	{
		"id": "5ae98b55-6e5b-4582-b58f-329a01685d6a",
		"title_adverts": "Hayabusa MARCUS",
		"year_adverts": "2012",
		"type_adverts": "sell",
		"type_veicule": "motorcycle",
		"kilometers_adverts": "101000",
		"price_adverts": 10000,
		"description_adverts": "Carro em execelente estado de conservação",
		"isAvailable": true,
		"createdAt_adverts": "2023-03-07T19:02:12.369Z",
		"updatedAt_adverts": "2023-03-07T19:02:12.369Z",
		"cover_image_adverts": "https://motornoticias.com.br/wp-content/uploads/2022/01/Suzuki-HAYABUSA-2022-nova-cor-e-divulgada.png",
		"user": {
			"id": "dcdad556-e984-4c1b-9070-d5761c7cc3f3",
			"name": "Marcus anunciante",
			"email": "marcuspvh@gmail.com",
			"cpf": "09870844880",
			"phone_number": "981158855",
			"description_user": "Anu8nciante Nota 10",
			"birth_date": "1971-04-20T04:00:00.000Z",
			"createdAt": "2023-03-07T18:13:24.464Z",
			"updatedAt": "2023-03-07T18:13:24.464Z",
			"isAdm": true,
			"isActive": true,
			"address": {
				"id": "6241ad8d-a0b9-4080-8618-e74310a21d5c",
				"street": "Rua Doctor Pires de camargo",
				"zipCode": "18155000",
				"number": "68",
				"city": "Piedade",
				"state": "SP",
				"complement": "Casa"
			},
			"adverts": [
				{
					"id": "791518e6-9d1a-4e7b-80ca-9a2574c7c6fb",
					"title_adverts": "Pajero TR4 MARCUSSS",
					"year_adverts": "2012",
					"type_adverts": "sell",
					"type_veicule": "car",
					"kilometers_adverts": "101000",
					"price_adverts": 10000,
					"description_adverts": "Carro em execelente estado de conservação",
					"isAvailable": true,
					"createdAt_adverts": "2023-03-07T23:19:49.936Z",
					"updatedAt_adverts": "2023-03-07T23:19:49.936Z",
					"cover_image_adverts": "https://hips.hearstapps.com/hmg-prod/images/2023-mclaren-artura-101-1655218102.jpg?crop=1.00xw:0.847xh;0,0.153xh&resize=1200:*"
				},
				{
					"id": "e9629b98-497d-4219-bbc2-0bf82a8fd18f",
					"title_adverts": "Ferrary do Marcus",
					"year_adverts": "2020",
					"type_adverts": "sell",
					"type_veicule": "car",
					"kilometers_adverts": "100",
					"price_adverts": 701000,
					"description_adverts": "Ferray testarosa linda",
					"isAvailable": true,
					"createdAt_adverts": "2023-03-07T19:10:47.318Z",
					"updatedAt_adverts": "2023-03-07T19:16:47.033Z",
					"cover_image_adverts": "https://s2.glbimg.com/2CK1xEw_2FlMfZS2k9SnbrdbwB0=/fit-in/940x590/e.glbimg.com/og/ed/f/original/2013/03/05/laferrari4.jpg"
				},
				{
					"id": "5ae98b55-6e5b-4582-b58f-329a01685d6a",
					"title_adverts": "Hayabusa MARCUS",
					"year_adverts": "2012",
					"type_adverts": "sell",
					"type_veicule": "motorcycle",
					"kilometers_adverts": "101000",
					"price_adverts": 10000,
					"description_adverts": "Carro em execelente estado de conservação",
					"isAvailable": true,
					"createdAt_adverts": "2023-03-07T19:02:12.369Z",
					"updatedAt_adverts": "2023-03-07T19:02:12.369Z",
					"cover_image_adverts": "https://motornoticias.com.br/wp-content/uploads/2022/01/Suzuki-HAYABUSA-2022-nova-cor-e-divulgada.png"
				}
			],
			"comments": []
		},
		"imageAdverts": [
			{
				"id": "af5b5fc2-0c40-4eb1-822b-a50d3e7ddf1a",
				"galery_image": "https://motos-motor.com.br/m/wp-content/uploads/32/precos-tabela-suzuki-gsx-1300-r-hayabusa.jpg"
			},
			{
				"id": "f32beb5f-6973-4245-a713-77257b8826d7",
				"galery_image": "https://st2.depositphotos.com/1955233/8417/i/950/depositphotos_84179232-stock-photo-suzuki-hayabusa-on-display.jpg"
			},
			{
				"id": "428eda1b-250c-4ae9-9528-b6fbc1df75a8",
				"galery_image": "https://www.theriders.com.br/wp-content/uploads/2022/08/6.-Suzuki-Hayabusa.jpg"
			},
			{
				"id": "677668d2-6eb4-468d-a9ae-3ecc5af299ca",
				"galery_image": "https://motornoticias.com.br/wp-content/uploads/2022/01/Suzuki-HAYABUSA-2022-nova-cor-e-divulgada.png"
			}
		]
	}
]
```



Podemos acessar um anuncio específico utilizando o endpoint:

`GET /users/:advert_id - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"id": "5ae98b55-6e5b-4582-b58f-329a01685d6a",
	"title_adverts": "Hayabusa MARCUS",
	"year_adverts": "2012",
	"type_adverts": "sell",
	"type_veicule": "motorcycle",
	"kilometers_adverts": "101000",
	"price_adverts": 10000,
	"description_adverts": "Carro em execelente estado de conservação",
	"isAvailable": true,
	"createdAt_adverts": "2023-03-07T19:02:12.369Z",
	"updatedAt_adverts": "2023-03-07T19:02:12.369Z",
	"cover_image_adverts": "https://motornoticias.com.br/wp-content/uploads/2022/01/Suzuki-HAYABUSA-2022-nova-cor-e-divulgada.png",
	"comments": [],
	"user": {
		"id": "dcdad556-e984-4c1b-9070-d5761c7cc3f3",
		"name": "Marcus anunciante",
		"email": "marcuspvh@gmail.com",
		"password": "$2b$10$6ZI6fyINKawXlScxESSLduFHS6TI4MdLbmB95u9zKV8VEcRDswODS",
		"cpf": "09870844880",
		"phone_number": "981158855",
		"description_user": "Anu8nciante Nota 10",
		"birth_date": "1971-04-20T04:00:00.000Z",
		"createdAt": "2023-03-07T18:13:24.464Z",
		"updatedAt": "2023-03-07T18:13:24.464Z",
		"isAdm": true,
		"isActive": true,
		"address": {
			"id": "6241ad8d-a0b9-4080-8618-e74310a21d5c",
			"street": "Rua Doctor Pires de camargo",
			"zipCode": "18155000",
			"number": "68",
			"city": "Piedade",
			"state": "SP",
			"complement": "Casa"
		},
```

<h2 align ='center'> Criação de usuário </h2>

`POST /users - FORMATO DA REQUISIÇÃO`

```json
{
"name": "Marcus anunciante",
"email": "marcuspvh@gmail.com",
"phone_number": "981158855",
"password": "Mil&na2003",
"cpf": "09870844880", 
"description_user": "Anu8nciante Nota 10", 
"birth_date": "1971-04-20",
"isAdm": true,
"address": {
		"street": "Rua Doctor Pires de camargo",
		"zipCode": "18155000",
		"number": "68",
		"city": "Piedade",
		"state": "SP",
		"complement": "Casa"
	}
	
}
```

Caso dê tudo certo, a resposta será assim:

`POST /users - FORMATO DA RESPOSTA - STATUS 201`

```json
{
	"name": "Marcus anunciante",
	"email": "marcuspvh@gmail.com",
	"cpf": "09870844880",
	"phone_number": "981158855",
	"description_user": "Anu8nciante Nota 10",
	"birth_date": "1971-04-20T04:00:00.000Z",
	"isAdm": true,
	"createdAt": "2023-03-07T18:13:24.464Z",
	"updatedAt": "2023-03-07T18:13:24.464Z",
	"address": {
		"street": "Rua Doctor Pires de camargo",
		"zipCode": "18155000",
		"number": "68",
		"city": "Piedade",
		"state": "SP",
		"complement": "Casa",
		"id": "6241ad8d-a0b9-4080-8618-e74310a21d5c"
	},
	"id": "dcdad556-e984-4c1b-9070-d5761c7cc3f3",
	"isActive": true
}
```

1. O campo - "description_user": Pode receber as informações especificas sobre o usuário.

2. O campo - "isAdm" deve receber "true" se o usuário for Anunciante e "false" caso o usuário seja Comprador

<h2 align ='center'> Possíveis erros </h2>

Caso você acabe errando e mandando algum campo errado, a resposta de erro será assim:
No exemplo a requisição foi feita faltando o campo "contact" e "course_module".

`POST /users - `
` FORMATO DA RESPOSTA - STATUS 400`

```json
{
  "status": "error",
  "message": ["description_user is required", "isAdm is required"]
}
```


Email já cadastrado:

`POST /users - `
` FORMATO DA RESPOSTA - STATUS 400`

```json
{
  "status": "error",
  "message": "Email already exists"
}
```

<h2 align = "center"> Login </h2>

`POST /sessions - FORMATO DA REQUISIÇÃO`

```json
{
"email": "marcuspvh@gmail.com",
"password": "Ano@2023"
}
```

Caso dê tudo certo, a resposta será assim:

`POST /sessions - FORMATO DA RESPOSTA - STATUS 201`

```json
{
 {
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbSI6ZmFsc2UsImVtYWlsIjoicGVkcm9AZ21haWwuY29tIiwiaWF0IjoxNjc4MjIyMDQ4LCJleHAiOjE2NzgzMDg0NDgsInN1YiI6IjEwMDM4ODc2LTZmNzUtNDIwMC05NzY3LTI0NzNmMjc0ZmU3NiJ9.NrbPiNW9_etHtiSi_aQOUDqTuRLr_7GMmWb9s23LeNY",
	"user": {
		"id": "10038876-6f75-4200-9767-2473f274fe76",
		"name": "Pedro Comprador",
		"email": "pedro@gmail.com",
		"password": "$2b$10$Is.nf.IQikRO5T5rVdP.muWzv8znEG1/.DPZmcor2OUjB991ms/d.",
		"cpf": "123456789101",
		"phone_number": "981158855",
		"description_user": "Comprador Nota 10",
		"birth_date": "1971-04-20T04:00:00.000Z",
		"createdAt": "2023-03-07T20:47:20.653Z",
		"updatedAt": "2023-03-07T20:47:20.653Z",
		"isAdm": false,
		"isActive": true,
		"address": {
			"id": "41d72237-c58d-4bf3-b45a-2b25c4382fa4",
			"street": "Rua Doctor Pires de camargo",
			"zipCode": "18155000",
			"number": "68",
			"city": "Piedade",
			"state": "SP",
			"complement": "Casa"
		},
		"adverts": [],
		"comments": []
	}
}
```

Com essa resposta, vemos que temos duas informações, o user e o token respectivo, dessa forma você pode guardar o token e o usuário logado no localStorage para fazer a gestão do usuário no seu frontend.

## Rotas que necessitam de autorização

Rotas que necessitam de autorização deve ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

> Authorization: Bearer {token}

Após o usuário estar logado, ele deve conseguir informar as tecnologias que ele aprendeu até agora.

<h2 align ='center'> Buscar Perfil do usuário logado (token) </h2>

`GET /id - FORMATO DA REQUISIÇÃO`

<blockquote>Na requisição apenas é necessário o TOKEN, a aplicação ficará responsável em buscar o id do usuário no token e retorna ele.</blockquote>

<br>

`GET /id - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"id": "dcdad556-e984-4c1b-9070-d5761c7cc3f3",
	"name": "Marcus anunciante",
	"email": "marcuspvh@gmail.com",
	"password": "$2b$10$6ZI6fyINKawXlScxESSLduFHS6TI4MdLbmB95u9zKV8VEcRDswODS",
	"cpf": "09870844880",
	"phone_number": "981158855",
	"description_user": "Anu8nciante Nota 10",
	"birth_date": "1971-04-20T04:00:00.000Z",
	"createdAt": "2023-03-07T18:13:24.464Z",
	"updatedAt": "2023-03-07T18:13:24.464Z",
	"isAdm": true,
	"isActive": true,
	"address": {
		"id": "6241ad8d-a0b9-4080-8618-e74310a21d5c",
		"street": "Rua Doctor Pires de camargo",
		"zipCode": "18155000",
		"number": "68",
		"city": "Piedade",
		"state": "SP",
		"complement": "Casa"
	},
	"adverts": [
		{
			"id": "5ae98b55-6e5b-4582-b58f-329a01685d6a",
			"title_adverts": "Hayabusa MARCUS",
			"year_adverts": "2012",
			"type_adverts": "sell",
			"type_veicule": "motorcycle",
			"kilometers_adverts": "101000",
			"price_adverts": 10000,
			"description_adverts": "Carro em execelente estado de conservação",
			"isAvailable": true,
			"createdAt_adverts": "2023-03-07T19:02:12.369Z",
			"updatedAt_adverts": "2023-03-07T19:02:12.369Z",
			"cover_image_adverts": "https://motornoticias.com.br/wp-content/uploads/2022/01/Suzuki-HAYABUSA-2022-nova-cor-e-divulgada.png",
			"imageAdverts": [
				{
					"id": "677668d2-6eb4-468d-a9ae-3ecc5af299ca",
					"galery_image": "https://motornoticias.com.br/wp-content/uploads/2022/01/Suzuki-HAYABUSA-2022-nova-cor-e-divulgada.png"
				},
				{
					"id": "428eda1b-250c-4ae9-9528-b6fbc1df75a8",
					"galery_image": "https://www.theriders.com.br/wp-content/uploads/2022/08/6.-Suzuki-Hayabusa.jpg"
				},
				{
					"id": "f32beb5f-6973-4245-a713-77257b8826d7",
					"galery_image": "https://st2.depositphotos.com/1955233/8417/i/950/depositphotos_84179232-stock-photo-suzuki-hayabusa-on-display.jpg"
				},
				{
					"id": "af5b5fc2-0c40-4eb1-822b-a50d3e7ddf1a",
					"galery_image": "https://motos-motor.com.br/m/wp-content/uploads/32/precos-tabela-suzuki-gsx-1300-r-hayabusa.jpg"
				}
			]
		},
		{
			"id": "e9629b98-497d-4219-bbc2-0bf82a8fd18f",
			"title_adverts": "Ferrary do Marcus",
			"year_adverts": "2020",
			"type_adverts": "sell",
			"type_veicule": "car",
			"kilometers_adverts": "100",
			"price_adverts": 701000,
			"description_adverts": "Ferray testarosa linda",
			"isAvailable": true,
			"createdAt_adverts": "2023-03-07T19:10:47.318Z",
			"updatedAt_adverts": "2023-03-07T19:16:47.033Z",
			"cover_image_adverts": "https://s2.glbimg.com/2CK1xEw_2FlMfZS2k9SnbrdbwB0=/fit-in/940x590/e.glbimg.com/og/ed/f/original/2013/03/05/laferrari4.jpg",
			"imageAdverts": []
		},
		{
			"id": "791518e6-9d1a-4e7b-80ca-9a2574c7c6fb",
			"title_adverts": "Pajero TR4 MARCUSSS",
			"year_adverts": "2012",
			"type_adverts": "sell",
			"type_veicule": "car",
			"kilometers_adverts": "101000",
			"price_adverts": 10000,
			"description_adverts": "Carro em execelente estado de conservação",
			"isAvailable": true,
			"createdAt_adverts": "2023-03-07T23:19:49.936Z",
			"updatedAt_adverts": "2023-03-07T23:19:49.936Z",
			"cover_image_adverts": "https://hips.hearstapps.com/hmg-prod/images/2023-mclaren-artura-101-1655218102.jpg?crop=1.00xw:0.847xh;0,0.153xh&resize=1200:*",
			"imageAdverts": [
				{
					"id": "cd0264d9-edb1-4d34-833d-8ac794289dee",
					"galery_image": "https://quatrorodas.abril.com.br/wp-content/uploads/2016/11/570d676282bee1142b009053qr-597-tr4-01.jpeg?quality=70&strip=all&strip=all"
				},
				{
					"id": "1f0bed46-d8e9-434f-adcc-0fe186636c87",
					"galery_image": "https://revistacarro.com.br/wp-content/uploads/2018/05/nfgnfnfnfnfnfnf.jpg"
				},
				{
					"id": "25b5492e-0be2-410c-b4b8-c360caa9dde2",
					"galery_image": "https://img1.icarros.com/dbimg/galeriaimgmodelo/8/9117_1.jpg"
				},
				{
					"id": "6db312df-6152-4008-983e-032699022022",
					"galery_image": "https://i.ytimg.com/vi/bMtYe68UzMQ/maxresdefault.jpg"
				}
			]
		}
	],
	"comments": []
}
```

<h2 align ='center'> Criar anuncios para o seu perfil </h2>

`POST /adverts - FORMATO DA REQUISIÇÃO`

```json

{
"title_adverts": "Pajero TR4 ",
"year_adverts": "2012",
"type_adverts": "sell",
"type_veicule": "car",
"price_adverts": 10000,
"kilometers_adverts": "101000",
"description_adverts": "Carro em execelente estado de conservação",
"userId": "4d1149a0-5652-43d7-a508-f4dbf244401c",
"cover_image_adverts": "https://hips.hearstapps.com/hmg-prod/images/2023-mclaren-artura-101-1655218102.jpg?crop=1.00xw:0.847xh;0,0.153xh&resize=1200:*",
"galery_image": ["https://quatrorodas.abril.com.br/wp-content/uploads/2016/11/570d676282bee1142b009053qr-597-tr4-01.jpeg?quality=70&strip=all&strip=all", "https://i.ytimg.com/vi/bMtYe68UzMQ/maxresdefault.jpg", "https://img1.icarros.com/dbimg/galeriaimgmodelo/8/9117_1.jpg", "https://revistacarro.com.br/wp-content/uploads/2018/05/nfgnfnfnfnfnfnf.jpg"]
} 
```
`POST /adverts - FORMATO DA RESPOSTA`

```json
{
	"title_adverts": "Pajero TR4 ",
	"year_adverts": "2012",
	"type_adverts": "sell",
	"type_veicule": "car",
	"kilometers_adverts": "101000",
	"price_adverts": 10000,
	"description_adverts": "Carro em execelente estado de conservação",
	"cover_image_adverts": "https://hips.hearstapps.com/hmg-prod/images/2023-mclaren-artura-101-1655218102.jpg?crop=1.00xw:0.847xh;0,0.153xh&resize=1200:*",
	"user": {
		"id": "4d1149a0-5652-43d7-a508-f4dbf244401c",
		"name": "Marcus isAdm 02",
		"email": "marcus02@gmail.com",
		"cpf": "123456789101",
		"phone_number": "981158855",
		"description_user": "Anu8nciante Nota 10",
		"birth_date": "1971-04-20T04:00:00.000Z",
		"createdAt": "2023-03-08T14:57:54.253Z",
		"updatedAt": "2023-03-08T14:57:54.253Z",
		"isAdm": true,
		"isActive": true,
		"address": {
			"id": "cdf09c02-ea9a-4d00-b4a0-d47f4b94a67d",
			"street": "Rua Doctor Pires de camargo",
			"zipCode": "18155000",
			"number": "68",
			"city": "Piedade",
			"state": "SP",
			"complement": "Casa"
		},
		"adverts": [],
		"comments": []
	},
	"id": "c2cc8f1e-58f7-4896-b77b-53de531a00db",
	"isAvailable": true,
	"createdAt_adverts": "2023-03-08T14:58:15.448Z",
	"updatedAt_adverts": "2023-03-08T14:58:15.448Z"
}
```
1. O campo - "type_veicule" deve receber respectivamente os 2 níveis de tipo:
   - "car"
   - "motocycle"
2. O campo - "type_adverts" deve receber respectivamente os 2 níveis de tipo:
   - "sell"
   - "auction" 


`PATCH /adverts/id - FORMATO DA REQUISIÇÃO`

```json
{
  "title_adverts": "Ferrary Update",
  "year_adverts": "2020"
}
```

Também é possível deletar um anuncio, utilizando este endpoint:

`DELETE /adverts/id`

```
Não é necessário um corpo da requisição.
```

<h2 align ='center'> Criar comentários para um anuncio com o seu perfil </h2>

Da mesma forma de criar anuncios, conseguimos criar comentários, dessa forma:

`POST /comments - FORMATO DA REQUISIÇÃO`

```json
{
	"comments":"Comentario HOHE DELETE, DELETE TESTE", 
	"advertsId": "a3e9cec1-ff89-4fd6-acb4-849f609d5a61", 
	"userId": "a182a659-0893-4164-9a6c-6a1d1a9204b5"
}

```

Conseguimos atualizar o comentário.
Utilizando este endpoint:

`PATCH /comments/id - FORMATO DA REQUISIÇÃO`

```json
{
  "comments":"ALTERAÇÃO DE COMENTARIOS TESTE"
}
```

Também é possível deletar um comentário, utilizando este endpoint:

`DELETE /comments/id`

```
Não é necessário um corpo da requisição.
```

<h2 align ='center'> Atualizando os dados do perfil </h2>

Assim como os endpoints de anuncios e comentários, nesse precisamos estar logados, com o token no cabeçalho da requisição. Estes endpoints são para atualizar seus dados como, nome, ou qualquer outra informação em relação ao que foi utilizado na criação do usuário.

Nesse endpoint podemos atualizar qualquer dado do usuário, e a senha também, não é necessário enviar a antiga senha no campo "old_password" caso o usuário queira atualizar a senha.

`PATCH /users/id - FORMATO DA REQUISIÇÃO`

```json
{
"name": "Marcus anunciante",
"email": "marcuspvh21@gmail.com",
"phone_number": "981158855",
"password": "12345",
"cpf": "09870844880", 
"description_user": "Anu8nciante Nota 10", 
"birth_date": "1971-04-20",
"isAdm": true,
"address": {
		"street": "Rua Doctor Pires de camargo",
		"zipCode": "18155000",
		"number": "68",
		"city": "Piedade",
		"state": "SP",
		"complement": "Casa"
	}
}

```

---
