# Docker, NodeJS and Typescript Starter

## Features
* Docker
* NodeJS (+14)
* Typescript

## Getting Started

Run in development:

```sh
$ npm run watch-debug
```

with docker:

```sh
$ docker-compose up -d
```

Run in production:
```sh
$ run.sh
```
or
```sh
$ npm run build
$ npm run serve
```

Run linter:
```sh
$ npm run tslint
```

Run tests:
```sh
$ npm run test
```

## Warning

See : https://medium.com/codespace69/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server-consider-8afadc2385e2
If you got : "Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client"
For fix auth for MySQL v8.0 (or more) in NodeJS : 
```sh
> docker exec -it (container id) mysql -uroot -p
> root (or your pasword)
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_new_password';
mysql> FLUSH PRIVILEGES;
mysql> quit
```

