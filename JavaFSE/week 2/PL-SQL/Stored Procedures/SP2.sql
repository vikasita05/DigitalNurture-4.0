CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
   dept IN VARCHAR2,
   bonus IN NUMBER
) IS
BEGIN
   FOR emp IN (
      SELECT EmployeeID, Name, Salary FROM Employees
      WHERE Department = dept
   ) LOOP
      UPDATE Employees
      SET Salary = Salary + (Salary * bonus / 100)
      WHERE EmployeeID = emp.EmployeeID;

      DBMS_OUTPUT.PUT_LINE(
         ' Bonus applied to ' || emp.Name || 
         ' (New Salary: ' || TO_CHAR(emp.Salary + (emp.Salary * bonus / 100)) || ')'
      );
   END LOOP;
END;
/
SET SERVEROUTPUT ON;

BEGIN
   UpdateEmployeeBonus('IT', 10);
END;
/