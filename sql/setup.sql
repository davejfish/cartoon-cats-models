-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE IF EXISTS cats;

CREATE TABLE cats (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    type VARCHAR
);

INSERT INTO cats (name, type) VALUES
('doug', 'black cat'),
('bill', 'excellent cat'),
('ted', 'excellent cat'),
('neko', 'japanese cat');
