-- Procedure: TransferFunds
-- Purpose: Transfers funds between two accounts if sufficient balance is available

CREATE OR REPLACE PROCEDURE TransferFunds (
   p_source_id     IN NUMBER,   -- Source Account ID
   p_dest_id       IN NUMBER,   -- Destination Account ID
   p_amount        IN NUMBER    -- Amount to transfer
) IS
   v_source_balance NUMBER;     -- Variable to store current balance of source account
BEGIN
   -- Step 1: Fetch balance of source account
   SELECT Balance INTO v_source_balance
   FROM Accounts
   WHERE AccountID = p_source_id;

   -- Step 2: Check if balance is sufficient
   IF v_source_balance < p_amount THEN
      DBMS_OUTPUT.PUT_LINE('Transfer failed: Insufficient balance in source account.');
   ELSE
      -- Step 3: Deduct the amount from the source account
      UPDATE Accounts
      SET Balance = Balance - p_amount
      WHERE AccountID = p_source_id;

      -- Step 4: Add the amount to the destination account
      UPDATE Accounts
      SET Balance = Balance + p_amount
      WHERE AccountID = p_dest_id;

      -- Step 5: Confirmation message
      DBMS_OUTPUT.PUT_LINE('Transfer of Rs.' || p_amount ||
                           ' completed from Account ' || p_source_id ||
                           ' to Account ' || p_dest_id);
   END IF;

EXCEPTION
   WHEN NO_DATA_FOUND THEN
      DBMS_OUTPUT.PUT_LINE('Error: One of the account IDs does not exist.');
   WHEN OTHERS THEN
      DBMS_OUTPUT.PUT_LINE('Unexpected error: ' || SQLERRM);
END;
/

SET SERVEROUTPUT ON;
BEGIN
   TransferFunds(1, 2, 200);
END;
/