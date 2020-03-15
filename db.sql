DROP TABLE person;

CREATE TABLE person
(
   id SERIAL PRIMARY KEY NOT NULL,
   first VARCHAR(100) NOT NULL,
   last VARCHAR(100),
   birthday DATE
);

INSERT INTO person(first, last, birthday) VALUES ('Matthew', 'Blomquist', '1995-11-10');

DROP USER personuser;
CREATE USER personuser WITH PASSWORD 'pass';
GRANT SELECT, INSERT, UPDATE ON person TO personuser;
GRANT USAGE, SELECT ON SEQUENCE person_id_seq TO personuser;

