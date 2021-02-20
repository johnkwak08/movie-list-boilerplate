CREATE DATABASE movies;

USE movies

CREATE TABLE movielist (
    id INT AUTO_INCREMENT,
    title TEXT,
    watched BOOLEAN default 0,
    year INT, 
    runtime TEXT, 
    rating INT,
    PRIMARY KEY (id)
)