CREATE TABLE  impresiones 
(
	id int NOT NULL AUTO_INCREMENT,
	numero_control varchar(12) character set utf8 collate utf8_spanish_ci,
	numero_impresiones int,
	atendedor varchar(200) character set utf8 collate utf8_spanish_ci,
	fecha date,
	hora time,
	PRIMARY KEY(id)
)engine=myisam character set utf8 collate utf8_spanish_ci;

CREATE TABLE soporte 
(
	id int NOT NULL AUTO_INCREMENT,
	numero_control varchar(12) character set utf8 collate utf8_spanish_ci,
	correo varchar(100) character set utf8 collate utf8_spanish_ci,
	telefono varchar(20) character set utf8 collate utf8_spanish_ci,
	actividad varchar(100) character set utf8 collate utf8_spanish_ci,
	diagnostico varchar(600) character set utf8 collate utf8_spanish_ci,
	atendedor varchar(200) character set utf8 collate utf8_spanish_ci,
	fecha date,
	hora time,
	PRIMARY KEY (id)
)engine=myisam character set utf8 collate utf8_spanish_ci;

CREATE TABLE cablesred 
(
	id int NOT NULL AUTO_INCREMENT,
	numero_control varchar(12) character set utf8 collate utf8_spanish_ci,
	atendedor varchar(200) character set utf8 collate utf8_spanish_ci,
	fecha date,
	hora time,
	PRIMARY KEY (id)
)engine=myisam character set utf8 collate utf8_spanish_ci;