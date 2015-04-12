# sakila-on-sails
This is the latest version of sails framework with mysql sakila database

# Install
1. fork the repo
2. from /db folder import the sails-sakila.sql file to sakila_sails database (using workbench or whatever)
3. run npm install
4. run node app.js

Note thate there might still be things that you have to do, for example, configure correctly the mysql connection from /config/connections.js file;

You should have the rest api for sakila database available at localhost:1337/v1/ url.

This project was done in just a few hours, with little knowledge about the sails framework, but in the end the REST api is almost fully functional. The CRUD methods are fully function, but I have problems with the following blueprint endpoints: <a href="http://sailsjs.org/#!/documentation/reference/blueprint-api/Add.html">addTo</a>, <a href="http://sailsjs.org/#!/documentation/reference/blueprint-api/Populate.html">Populate</a> (note that this method works with e.g. `/restApiEndpoint/customer?populate=payments,address` which will populate only the payments collection and the address property), and <a href="http://sailsjs.org/#!/documentation/reference/blueprint-api/Remove.html">removeFrom</a>.
