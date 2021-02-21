DROP DATABASE IF EXISTS ebayDB;

CREATE DATABASE ebayDB;

USE ebayDB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(255),
  min_cost FLOAT,
  current_bid FLOAT,
  ends_in INT,
  img VARCHAR(255),
  PRIMARY KEY (id)
);


