-- Exercises:
SELECT * FROM `employees`;

SELECT MAX(SALARY) FROM `employees`;
SELECT MAX(SALARY), MIN(SALARY) FROM `employees`;
SELECT (MAX(SALARY) - MIN(SALARY)) FROM `employees`;

SELECT JOB_ID, CONCAT('R$', ROUND(AVG(SALARY)), '.00') AS Salary FROM `employees`
GROUP BY JOB_ID;

SELECT CONCAT('R$', SUM(SALARY)) AS 'Payroll' FROM `employees`;

SELECT FORMAT(MAX(SALARY), 2) AS 'max salary',
FORMAT(MIN(SALARY), 2) AS 'min salary',
FORMAT(SUM(SALARY), 2) AS 'payroll',
FORMAT(ROUND(AVG(SALARY)), 2)AS 'avg' FROM `employees`;

SELECT COUNT(JOB_ID) FROM `employees` WHERE JOB_ID = 'IT_PROG';

SELECT CONCAT('R$', FORMAT(SUM(SALARY), 2)) AS 'IT PROG SALARY' FROM `employees` group by JOB_ID HAVING JOB_ID = 'IT_PROG';

SELECT FORMAT(AVG(SALARY), 2) FROM `employees` GROUP BY JOB_ID HAVING JOB_ID <> 'IT_PROG';

SELECT COUNT(DEPARTMENT_ID), FORMAT(AVG(SALARY), 2) FROM `employees` GROUP BY DEPARTMENT_ID;

SELECT REPLACE(PHONE_NUMBER, '515', '777')FROM `employees`;