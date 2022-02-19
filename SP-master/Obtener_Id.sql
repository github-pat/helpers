BEGIN
	DECLARE v_NumeroInicial int;
	DECLARE v_NumeroFinal int;
	DECLARE v_Retorno int;

	SELECT MIN(T.ID) INTO v_NumeroInicial
	FROM
	(
		SELECT (CONVERT(INT,REPLACE(O.ID_INI,'INI',''))) AS ID
		FROM OBJETIVO_CENTRO O
		WHERE O.ID_INI IS NOT NULL) AS T

	SELECT COUNT(O.OBJC_COD) INTO v_NumeroFinal 
	FROM OBJETIVO_CENTRO O;

	WITH Secuencia AS
	(
		SELECT v_NumeroInicial AS `Numero`
		UNION ALL
		SELECT Numero + 1 FROM Secuencia WHERE Numero < v_NumeroFinal
	)
	SELECT
		  TOP(1) s.Numero INTO v_Retorno
	FROM
		Secuencia s
	WHERE
		NOT EXISTS (SELECT 1 FROM OBJETIVO_CENTRO WHERE (ID_INI = (CONCAT('INI' , CONVERT(VARCHAR,s.Numero)))))
		return v_Retorno
END
