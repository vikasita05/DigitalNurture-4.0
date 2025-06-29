SET SERVEROUTPUT ON;

DECLARE
   CURSOR seniors IS
      SELECT c.CustomerID, l.InterestRate
      FROM Customers c
      INNER JOIN Loans l ON c.CustomerID = l.CustomerID
      WHERE MONTHS_BETWEEN(SYSDATE, c.DOB) / 12 > 60;
BEGIN
   FOR rec IN seniors LOOP
      UPDATE Loans
      SET InterestRate = InterestRate - 1
      WHERE CustomerID = rec.CustomerID;

      DBMS_OUTPUT.PUT_LINE('1% interest discount applied to CustomerID ' || rec.CustomerID);
   END LOOP;
END;