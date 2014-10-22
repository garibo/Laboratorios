
CREATE TABLE  encuesta
(
	id int NOT NULL AUTO_INCREMENT,
	preg1 int NOT NULL,
	preg2 int NOT NULL,
	preg3 int NOT NULL,
	preg4 int NOT NULL,
	preg5 int NOT NULL,
	preg6 int NOT NULL,
	preg7 int NOT NULL,
	preg8 int NOT NULL,
	preg9 int NOT NULL,
	preg10 int NOT NULL,
	preg11 int NOT NULL,
	preg12 int NOT NULL,
	preg13 int NOT NULL,
	preg14 int NOT NULL,
	preg15 int NOT NULL,
	preg16 int NOT NULL,
	preg17 int NOT NULL,
	preg18 int NOT NULL,
	carrera varchar(50) NOT NULL,
	semestre varchar(3) NOT NULL,
	comentario varchar(600),
	PRIMARY KEY(id)
);

CREATE TABLE preguntas
(
	id int NOT NULL AUTO_INCREMENT,
	pregunta varchar(400) character set utf8 collate utf8_spanish_ci,
	PRIMARY KEY (id)
)engine=myisam character set utf8 collate utf8_spanish_ci;

INSERT INTO `preguntas`(`pregunta`) VALUES ('Hay las suficientes computadoras en los laboratorios.');
INSERT INTO `preguntas`(`pregunta`) VALUES ('Hay sillas y mesas suficientes.');
INSERT INTO `preguntas`(`pregunta`) VALUES ('Las computadoras de laboratorios siempre tienen internet.');
INSERT INTO `preguntas`(`pregunta`) VALUES ('Los laboratorios están disponibles de Lun a Vie de7 a 21 hrs.');
INSERT INTO `preguntas`(`pregunta`) VALUES ('Los laboratorios cuentan con personal capacitado.');
INSERT INTO `preguntas`(`pregunta`) VALUES ('El personal de Laboratorio brinda soporte técnico cuando lo solicito.');
INSERT INTO `preguntas`(`pregunta`) VALUES ('Siempre me dan una solución inmediata cuando tengo problemas con la computadora o algún programa.');
INSERT INTO `preguntas`(`pregunta`) VALUES ('Encuentro equipo de cómputo disponible.');
INSERT INTO `preguntas`(`pregunta`) VALUES ('Las computadoras de laboratorios cuentan con conexión a Internet.');
INSERT INTO `preguntas`(`pregunta`) VALUES ('Los programas que uso en clase los encuentro en el laboratorio 4.');
INSERT INTO `preguntas`(`pregunta`) VALUES ('La persona de la recepción es amable hacia mi persona.');
INSERT INTO `preguntas`(`pregunta`) VALUES ('El personal de laboratorios da una respuesta rápida a las necesidades y problemas que se me presentan.');
INSERT INTO `preguntas`(`pregunta`) VALUES ('El personal de laboratorio brinda una atención adecuada hacia mi persona.');
INSERT INTO `preguntas`(`pregunta`) VALUES ('Me atienden de forma oportuna y rápida cuando solicito alguna información.');
INSERT INTO `preguntas`(`pregunta`) VALUES ('Satisfacción con el personal de laboratorios.');
INSERT INTO `preguntas`(`pregunta`) VALUES ('Satisfacción de los auxiliares de laboratorios.');
INSERT INTO `preguntas`(`pregunta`) VALUES ('Satisfacción de Internet en los laboratorios.');
INSERT INTO `preguntas`(`pregunta`) VALUES ('Satisfacción de Internet inalambrico en los laboratorios.');