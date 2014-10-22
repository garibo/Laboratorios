--*buzon
--id
--carrera
--semestre
--telefono
--objetivo
--numero_control
--correo
--comentario

CREATE TABLE buzon
(
	id int not null auto_increment,
	carrera varchar(35) character set utf8 collate utf8_spanish_ci, 
	semestre int, 
	telefono varchar(20) character set utf8 collate utf8_spanish_ci,
	objetivo varchar(15) character set utf8 collate utf8_spanish_ci,
	numero_control varchar(12) character set utf8 collate utf8_spanish_ci, 
	correo varchar(100) character set utf8 collate utf8_spanish_ci,
	comentario varchar(600) character set utf8 collate utf8_spanish_ci,
	fecha date, 
	hora time, 
	primary key (id)
);
