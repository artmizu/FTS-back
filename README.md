# PostgreSQL FTS demo
![Full text PostgreSQL search](https://artmizu.ru/linux-screenshots/Screenshot%20at%2019-04-38.png)

PostgreSQL full text search features with Node JS back-end.

## [Demo](http://search.artmizu.ru/)

## Parts of project
- [Node JS back-end](https://github.com/artmizu/FTS-back)
- [Vue front-end](https://github.com/artmizu/FTS-front)

## Requirements
- PostgreSQL 11
- Node JS
- [Flyway](https://flywaydb.org/) for DB migrations
 
## Deployment
1. Clone both repositories;
2. Install npm dependencies through ```npm install``` for both;
3. Create a database and name it ```naked-search```;
4. Create ```flyway.conf``` inside ```/db/``` folder in a back-end repository. Fill it according to your DB settings. For example:
```
flyway.url=jdbc:postgresql://localhost:5432/naked-search
flyway.user=dbusername
flyway.locations=filesystem:./sql/
flyway.password=dbuserpassword
```
5. Similarly, create and fill up ```db.json``` in a root of back-end repository:
```
{
    "user": "dbusername",
    "host": "localhost",
    "database": "naked-search",
    "password": "dbuserpassword",
    "port": 5432
}
```
6.  Setup completed. 
  
To start local front-end server run ```npm run serve``` from the root of repository folder. Accordingly, run ```npm run serve``` from the back-end folder.