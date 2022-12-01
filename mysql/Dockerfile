FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=!SenhaDesafio123

ENV MYSQL_DATABASE=DesafioFullCycle

ENV MYSQL_USER=Hugo

ENV MYSQL_PASSWORD=!Hugo123

COPY CreateDataBase.sql /docker-entrypoint-initdb.d/

EXPOSE 3306