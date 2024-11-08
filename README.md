<h1 align="center">LibroRete - Dockerização</h1>

<p align="center">
  <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/0*rmv6pZTW2hfP2XYd.png">
</p>

<p align="center">
  <img src="https://img.shields.io/docker/v/_/node/22.11-alpine3.19?label=Node%20Docker&logo=docker" alt="Node Docker">
  <img src="https://img.shields.io/docker/v/_/mysql/8.0?label=MySQL%208.0&logo=mysql" alt="MySQL 8.0">
  <img src="https://img.shields.io/docker/v/_/python/3.13?label=Python%203.13&logo=python" alt="Python 3.13">
  <img src="https://img.shields.io/badge/Django-5.1.2-green?logo=django" alt="Django 5.1.2">
</p>


<h2>Introdução</h2>
<p>Repositório para "dockerizar" o projeto <a href="https://github.com/ES2-UFPI/LibroRete">LibroRete</a> que possui as seguintes tecnologias:</p>

* <a href="https://react.dev/">React</a> 
* <a href="https://www.djangoproject.com/">Django</a> 
* <a href="https://www.mysql.com/">Mysql</a> 
  
<h2>Instalação</h2>

Siga os passos abaixo para configurar o ambiente

1. Instale o **Docker** na sua máquina.  
   Você pode seguir as instruções de instalação no [site oficial do Docker](https://www.docker.com/get-started).

2. Faça um <code>git clone</code> deste repositório: ```git clone https://github.com/mancinidsb/librorete.git```


3. Crie um arquivo *.env* na raíz do diretório que possua os seguintes atributos (os valores podem ser configurados):
  
```env 
  MYSQL_ROOT_PASSWORD=xxx
  MYSQL_USER=xxx
  MYSQL_PASSWORD=xx
  DB_HOST=xxx
  DB_USER=xxx
  DB_PASSWORD=xxx
```
4. Com um terminal aberto dentro do diretório, insira o comando: ```docker compose up --build``` <br>
  &nbsp;&nbsp;&nbsp;&nbsp; Este comando irá utilizar os dockfiles para assim, criar os containers.</p>

<h2>Acessar a Aplicação - FrontEnd</h2>

Após a instalação, o container *frontend-1* mostrará a seguinte mensagem:

![image](https://github.com/user-attachments/assets/af6d2cd9-ce23-4a05-b439-515fa581f665)

Isto, significa que a aplicação *frontend* está rodando no <a href="http://localhost:3000">localhost:3000</a>. Para acessa-lá, basta digitar este endereço no seu navegador de internet.


<h2>Acessar a Aplicação - BackEnd</h2>

Após a instalação, o container *backend-1* mostrará a seguinte mensagem:

![image](https://github.com/user-attachments/assets/c3350381-f174-4b2f-a93d-d2cea4321af4)

Isto, significa que a aplicação *backend* está rodando no <a href="http://localhost:8000">localhost:8000</a>. Para acessa-lá, basta digitar este endereço no seu navegador de internet.
Caso isto não ocorra, espere o terminal não mandar mensagens por alguns segundos. Após isso, acesse o <a href="http://localhost:8000">localhost:8000</a> normalmente.

<h2>Rodar a Aplicação sem o processo de "build"</h2>

Caso queira somente rodar aplicação sem fazer o build das imagens, insira o seguinte código num terminal dentro da raíz do diretório (onde se encontra o *docker-compose.yml*): ```docker compose up```<br>
>**⚠️ATENÇÃO**: Faça isso apenas se apliacação já sofreu o processo de build!


<h3>Rodar Apenas um serviço (FrontEnd ou BackEnd )</h3>

Para rodar apenas o frontend, digite: ```docker compose up frontend```<br>
Para rodar apenas o backend, digite: ```docker compose up backend```<br>

>**⚠️ATENÇÃO**: Apesar de parecer que o docker apenas rodará um ou outro, na prática isto não acontece. <br>

O motivo disto é para evitar que um serviço precise de outro e este, esteja desligado. Para sanar esse problema, foi optado as seguintes dependências:<br>
* Ao rodar o frontend, o backend e o banco de dados serão ligados<br>
* Ao rodar o backend, apenas o banco de dados será ligado.<br>

Desse modo, caso o front faça uma requisição ao back, não ocorrerá uma falha de comunicação.







