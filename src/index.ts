import mysql from 'mysql';

console.log('ok');

const connection = mysql.createConnection({
  host: 'db',
  user: 'docker',
  password: 'docker',
  database: 'test_db',
  port: 3306,
});

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connection', connection);

  console.log('connected as id ' + connection.threadId);
});
