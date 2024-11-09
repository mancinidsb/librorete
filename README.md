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

<h2>Acessar o Banco De Dados</h2>

Existem algumas maneiras de acessar o banco de dados: pelo CMD (no Windows), pelo Docker Desktop ou pelo MySQL Workbench. <br>
Para qualquer um dos métodos, é **necessário** que o Docker e os containers do projeto estejam ativos.

<h3>Usando CMD(Windows)</h3>

Com o CMD aberto, digite: ```docker exec -it librorete-db-1 /bin/sh```<br>
Esse comando abrirá o terminal vinculado ao container que contém o banco de dados.


![image](https://github.com/user-attachments/assets/6f88ed73-c262-444b-8cdd-3388b875bd55)

Para acessar o Mysql digite: ```mysql -u <usuário> -p```<br>
No espaço ```<usuário>``` digite o usuário criado no arquivo **.env** na variável **MYSQL_USER**<br>
Lembre-se que o usuário padrão é **root**


![image](https://github.com/user-attachments/assets/6c159076-ce21-4666-aa86-16d343baab1f)


Depois de inserir o comando, digite a senha vinculada ao usuário. Esta senha é a mesma do arquivo **.env** na variável: **MYSQL_PASSWORD**<br>

Após isso, a seguinte tela será mostrada:

![image](https://github.com/user-attachments/assets/ca38bbcf-5f48-4119-94a1-9a4e300c388f)

Com isso, é possivel utilizar comandos SQL<br>
Como no exemplo abaixo, é utilizado o comando ```SHOW DATABASES;``` que mostrará as *Databases* que estam inseridas no container.

![image](https://github.com/user-attachments/assets/a7384807-0c0f-4a21-90b5-95f14f91a2a6)


<h3>Usando o Docker Desktop</h3>

Abra o Docker Desktop e, com os containers ativos, clique no container **db-1**.

![image](https://github.com/user-attachments/assets/555d4af6-8161-4904-ad50-2a1d1dcd3cee)


Vá para o aba **exec**

![image](https://github.com/user-attachments/assets/551b9aa9-d104-4edb-b389-45a2d4b42b9d)


Digite o comando: ```mysql -u <usuário> -p``` e após digitar a senha vinculada ao usuário, será possível executar comandos SQL<br>
Por exemplo:

![image](https://github.com/user-attachments/assets/a80cb5b6-a5aa-414a-8a0f-ee3951248955)



<h3>Usando o MySQL Workbench</h3>


Primeiramente, baixe e instale o MySQL Workbench pelo seu <a href="https://dev.mysql.com/downloads/workbench/">site oficial</a>.

Com o MySQL Workbench aberto, clique no ícone de "+" para criar uma nova conexão<br>

![image](https://github.com/user-attachments/assets/fbfc6991-f1c3-4b2f-ba84-0ad844276c3d)
 
Insira um nome para a sua conexão e o usuário, e em seguida clique em "ok"

![image](https://github.com/user-attachments/assets/a2cb01fb-f65c-4fb4-ad3a-3748fee22ab2)

Será criada uma nova conexão, clique nela para abri-lá

![image](https://github.com/user-attachments/assets/bcac0c83-acdd-40ec-97f3-e30ec246165f)

Em seguida, digite a senha correspondente ao usuário

![image](https://github.com/user-attachments/assets/c1ff1f43-e5d5-4b0f-a37e-6610df1aeba2)

Após isso, será possivel digitar comandos SQL

![image](https://github.com/user-attachments/assets/df1149d9-00ed-4b8b-87d1-0028b8cb8383)































