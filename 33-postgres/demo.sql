CREATE TABLE items (
-- two dashes makes a comment
-- column name
--           column data type
--                        extra column details
  id           SERIAL       PRIMARY KEY,
  item_name    TEXT         NOT NULL,
  description  TEXT,
  completed    BOOLEAN      DEFAULT false,  
  created      TIMESTAMPTZ  DEFAULT now()
);

	
DROP TABLE items;

DROP TABLE IF EXISTS items;

INSERT INTO items (item_name, description) VALUES ('bread', 'multigrain');
INSERT INTO items (item_name, description) VALUES ('butter', 'salted');