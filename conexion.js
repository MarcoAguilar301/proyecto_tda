const mysql = require('mysql');

const conection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'bd_paises'
})

conection.connect((err) => {
    if(err) throw err;
    console.log('conexion existosa')
})

/*insertar = 'INSERT INTO paises VALUES ("AA","Awanta")'
conection.query(insertar,(err,rows) => {
    if(err) throw err;
})*/

/*eliminar = 'DELETE FROM paises WHERE Codigo = "AK"'
conection.query(eliminar, (err, rows) => {
    if(err) throw err;
})*/

/*actualizar = 'UPDATE paises SET Codigo="AB" WHERE Pais="Antigua and Barbuda"'
conection.query(actualizar,(err,rows) => {
    if(err) throw err;
})*/

conection.query('SELECT * FROM paises WHERE (Pais LIKE "A%")',(err,rows) => {
    if(err) throw err;
    console.log(rows)
})

conection.end()