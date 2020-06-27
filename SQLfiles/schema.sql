
DROP DATABASE IF EXISTS krusty_krab_db;


CREATE DATABASE krusty_krab_db;

USE krusty_krab_db;


CREATE TABLE menu (
  id int NOT NULL AUTO_INCREMENT,
  menu_item varchar(255) NOT NULL,
  is_devour BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);


INSERT INTO menu (menu_item, is_devour) 
VALUES ('Krabby Patty', false);
INSERT INTO menu (menu_item, is_devour) 
VALUES ('Double Krabby Patty', false);
INSERT INTO menu (menu_item, is_devour) 
VALUES ('Tripple Krabby Patty', false);
INSERT INTO menu (menu_item, is_devour) 
VALUES ('Coral Bits', false);
INSERT INTO menu (menu_item, is_devour) 
VALUES ('Kelp Rings', false);
INSERT INTO menu (menu_item, is_devour) 
VALUES ('Krabby Meal', false);
INSERT INTO menu (menu_item, is_devour) 
VALUES ('Double Krabby Meal', false);
INSERT INTO menu (menu_item, is_devour) 
VALUES ('Tripple Krabby Meal', false);
