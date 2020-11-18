Use test_db;

DROP TABLE IF EXISTS `test_tb`;
CREATE TABLE `test_tb` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(20) NOT NULL,
  `content` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO test_tb (id, title, content) values (1, 'test-title', 'test-content');
INSERT INTO test_tb (id, title, content) values (2, 'test-title 2', 'test-content 2');

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'docker';
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'docker';

-- then
FLUSH PRIVILEGES;
