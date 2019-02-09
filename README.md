# NodeJs, Knex, MySQL, Jest example

_I have deliberately limited the scope of this example to demonstrate Knex and MySQL_

This example contains 
 - CRUD operation as well as covers transaction. 
 - It uses a free MySQL RDS hosted at AWS
 - script_v1.sql contains sqls in cases needed
 - database configurations can be changed through knex-cfg.js


#### To Install 
```npm install or npm i```

#### To Test
```npm test```

#### To Run
```npm start```

###### Note 
_running the application just prints the available products from the database. 
If you want to try CRUD/transaction operations then refer *.spec.js files, remove .skip and try 
running those tests with experimental data_ 
