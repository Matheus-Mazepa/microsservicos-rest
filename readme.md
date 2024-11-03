# README #

## Utilizando o projeto pelo Docker

Em primeiro lugar é necessário ter o docker e o docker-compose instalados em sua máquina, para isso segue o tutorial:

* [Tutorial de instalação do docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
* [Tutorial de instalação do docker-compose](https://docs.docker.com/compose/install/)

### Configuração inicial
Para iniciar o projeto, basta rodar o comando abaixo a partir da pasta raiz da aplicação:

### Subir o ambiente
```shell
./app start
```

### Derrubar o ambiente
```shell
./app stop
```

### Limpar o ambiente
> **Atenção!** Este comando irá **derrubar o ambiente**, limpar os container órfãos e derrubar a rede 
> interna do ambiente de desenvolvimento. Utilize-o com cuidado.

```shell
./app clean
```