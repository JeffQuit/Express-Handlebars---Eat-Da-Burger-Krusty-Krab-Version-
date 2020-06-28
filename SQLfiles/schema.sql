
DROP DATABASE IF EXISTS krusty_krab_db;


CREATE DATABASE krusty_krab_db;

USE krusty_krab_db;


CREATE TABLE menu (
  id int NOT NULL AUTO_INCREMENT,
  menu_item varchar(255) NOT NULL,
  is_devour BOOLEAN DEFAULT false NOT NULL,
  PRIMARY KEY (id)
);
