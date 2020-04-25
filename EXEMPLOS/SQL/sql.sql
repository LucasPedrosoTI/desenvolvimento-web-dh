# Uma consulta que resulte na media faturada por cada tipo de os.

SELECT tipos_de_os.nome, 
AVG(valor) AS media,
SUM(valor) AS total_profit
FROM oss 
INNER JOIN tipos_de_os ON oss.id_tipo=tipos_de_os.id
group by tipos_de_os.nome;

# UMA CONSULTA que retorne id da os, endereco, valor, nome do tipo da os

SELECT o.id, o.endereco, o.valor, tdo.nome
FROM oss AS o
INNER JOIN tipos_de_os AS tdo ON o.id_tipo=tdo.id;

# Uma consulta que retorne o nome do funcionário seguido do nome a equipe a qual ele pertence

SELECT f.nome, e.nome
FROM funcionarios AS f
INNER JOIN equipes AS e ON f.id_equipe=e.id;

# Uma consulta que retorne o total dos valores das oss POR BAIRRO:
# Colunas: nome_bairro, valor_total

SELECT b.nome as nome_bairro,
SUM(o.valor) AS valor_total
FROM oss AS o
INNER JOIN bairros AS b ON b.id = o.id_bairro
GROUP BY b.nome;

# Qual a soma dos valores das OSs do bairro 1

SELECT b.nome, SUM(o.valor)
FROM oss o
INNER JOIN bairros b ON o.id_bairro = b.id
WHERE b.id = 1;

# 	nome	SUM(o.valor)
#  AEROPORTO VIRACOPOS	187634.00

# Qual a soma dos valores de todas as OSs

SELECT SUM(valor) AS total FROM oss; 
# 1153579.00

# Quantas Oss possuem 'an' no endereço, são para 2019-11-18 e tem duracao prev menor que 120

SELECT COUNT(id) AS total_oss FROM oss WHERE endereco LIKE "%an%"; 

#	COUNT(id)
#	14

#INSERINDO UMA OSS
INSERT INTO oss (endereco, id_bairro, id_tipo, duracao_prev, duracao_real, valor, data)
VALUES ('rua 1', 1, 1, 120, 240, 12345, curdate());

# Qual a data da última OS realizada (utilize o DATE_FORMAT)

SELECT id, endereco, data AS data FROM oss order by data desc LIMIT 1;

# Quantas Oss possuem 'an' no endereço, são para 2019-11-18 e tem duracao prev menor que 120

SELECT COUNT(*) FROM oss WHERE endereco LIKE "%an%" AND data="2019-11-18";

# Há quantos dias não se REALIZA uma OS

SELECT DATEDIFF(curdate(), MAX(data)) FROM oss;

#DELETING A ENTITY
DELETE FROM oss where id = 51;

# Uma consulta que resulte no total que cada equipe faturou 2019-11-18.

SELECT e.nome, SUM(o.valor)  
FROM equipes  e
INNER JOIN oss_equipes oe ON e.id = oe.id_equipe
INNER JOIN oss o ON o.id = oe.id_os
WHERE o.data = "2019-11-18"
GROUP BY e.nome