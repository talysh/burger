DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INTEGER(11) NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (256) NOT NULL,
    devoured BOOLEAN default FALSE,
    PRIMARY KEY (id)
);