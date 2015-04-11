# sakila-on-sails
This is the latest version of sails framework with mysql sakila database

# Install
1. fork the repo
2. from /db folder import the sails-sakila.sql file to sakila_sails database (using workbench or whatever)
3. run npm install
4. run node app.js

Note thate there might still be things that you have to do, for example, configure correctly the mysql connection from /config/connections.js file;

You should have the rest api for sakila database available at localhost:1337/v1/ url. This is work in progress, so the relations are not correct yet, but most of it works.
