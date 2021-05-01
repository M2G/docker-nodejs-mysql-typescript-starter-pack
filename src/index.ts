/*eslint-disable*/
const mysql = require('mysql2');

console.log('okok');

const connection = mysql.createConnection({
  host: 'mysql',
  user: 'docker',
  password: 'docker',
  database: 'test_db',
  port: 3306,
});

connection.connect((err: any) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log('connection', connection);

  console.log(`connected as id ${connection.threadId}`);
});
