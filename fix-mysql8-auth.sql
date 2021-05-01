ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'docker';
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'docker';
-- or
ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY 'docker';
-- then
FLUSH PRIVILEGES;
