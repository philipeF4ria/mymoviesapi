CREATE DATABASE mymovies;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users(
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL UNIQUE,
  password VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS movies(
  uuid UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  id VARCHAR NOT NULL,
  title VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  image_url VARCHAR NOT NULL,
  user_id UUID,
  FOREIGN KEY(user_id) REFERENCES users(id)
);
