##Best Practices for a Nodejs Project

##Database setup
````mysql
create database sampleblogdb;
CREATE USER 'samplebloguser'@'localhost' IDENTIFIED BY  'sampleblogpass';
GRANT ALL PRIVILEGES ON sampleblogdb.* TO 'samplebloguser'@'localhost';
FLUSH PRIVILEGES;
...