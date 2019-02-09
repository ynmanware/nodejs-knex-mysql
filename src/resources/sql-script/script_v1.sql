
CREATE TABLE IF NOT EXISTS products (
         productID    INT UNSIGNED  NOT NULL AUTO_INCREMENT,
         productCode  CHAR(3)       NOT NULL DEFAULT '',
         name         VARCHAR(30)   NOT NULL DEFAULT '',
         quantity     INT UNSIGNED  NOT NULL DEFAULT 0,
         price        DECIMAL(7,2)  NOT NULL DEFAULT 99999.99,
         PRIMARY KEY  (productID)
       );

INSERT INTO products VALUES
         (NULL, 'PEN', 'Pen Blue',  8000, 1.25),
         (NULL, 'PEN', 'Pen Black', 2000, 1.25),
         (NULL, 'PEC', 'Pencil 2B', 10000, 0.48),
         (NULL, 'PEC', 'Pencil 2H', 8000, 0.49);


 CREATE TABLE IF NOT EXISTS address (
          addressId    INT UNSIGNED  NOT NULL AUTO_INCREMENT,
          code  CHAR(6)       NOT NULL DEFAULT '',
          line1         VARCHAR(30)   NOT NULL DEFAULT '',
          line2         VARCHAR(30)   NOT NULL DEFAULT '',
          PRIMARY KEY  (addressId)
        );

INSERT INTO address VALUES
         (NULL, '3000', '2/34 Chestnut rd',  'Carnegie, VIC'),
         (NULL, '3000', '2/34 Walnut rd',  'Carnegie, VIC')
