DROP TABLE IF EXISTS card_table;
DROP TABLE IF EXISTS item_table;

CREATE TABLE card_table (
  id SERIAL PRIMARY KEY, 
  title TEXT
);

CREATE TABLE item_table (
  id SERIAL PRIMARY KEY,
  card_id INT REFERENCES card_table(id),
  description TEXT,
  status_label BOOLEAN
);