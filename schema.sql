CREATE DATABASE movies;

USE movies

CREATE TABLE movielist (
    id INT AUTO_INCREMENT,
    title TEXT,
    watched BOOLEAN,
    year INT, 
    runtime TEXT, 
    rating INT,
    PRIMARY KEY (id)
)