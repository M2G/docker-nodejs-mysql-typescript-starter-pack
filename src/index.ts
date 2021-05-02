/*eslint-disable*/
import { createConnection } from 'mysql2';

console.log('okok');

const connection = createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
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
