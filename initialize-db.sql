
CREATE DATABASE films;
USE films;

CREATE TABLE
    movies (
        id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        genre VARCHAR(100),
        rate FLOAT,
        year INT
    );

INSERT INTO movies (title, genre, year, rate)
  VALUES ('Deadpool', 'action', 1234, 4.8);
INSERT INTO movies (title, genre, year, rate)
  VALUES ('Avatar', 'action', 1234, 4.7);
INSERT INTO movies (title, genre, year, rate)
  VALUES ('Minions', 'comedy', 1234, 4.9);
INSERT INTO movies (title, genre, year, rate)
  VALUES ("Batman", "superhero", 1234, 4.0);
INSERT INTO movies (title, genre, year, rate)
  VALUES ("Superman", "superhero", 1234, 4.0);
INSERT INTO movies (title, genre, year, rate)
  VALUES ("Antman", "superhero", 1234, 4.0);
INSERT INTO movies (title, genre, year, rate)
  VALUES ("Grumpy Cat", "drama", 2022, 5.0);