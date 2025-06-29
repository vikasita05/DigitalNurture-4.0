SET SERVEROUTPUT ON;

-- 1. Create the stored procedure
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
   FOR acc IN (
      SELECT AccountID, Balance 
      FROM Accounts
      WHERE AccountType = 'Savings'
   ) LOOP
      UPDATE Accounts
      SET Balance = acc.Balance * 1.01
      WHERE AccountID = acc.AccountID;

      DBMS_OUTPUT.PUT_LINE('Interest applied to AccountID: ' || acc.AccountID);
   END LOOP;
END;
/

-- 2. Execute the stored procedure
BEGIN
   ProcessMonthlyInterest;
END;
/