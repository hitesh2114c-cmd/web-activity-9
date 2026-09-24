from bank_account import BankAccount
account_number = input("Enter Account number")
initial_balance = float(input("Enter Initial balance"))

account = BankAccount(account_number, initial_balance)

n = int(input("Enter n "))

for i in range(n):
    operation = input("Enter which operation - deposit,withdraw,balance,get or set ")
    
    if operation == "deposit":
        amount = float(input("Enter amount to deposit"))
        account.deposit(amount)
    elif operation == "withdraw":
        amount = float(input("Enter Amount to withdrawn"))
        account.withdraw(amount)
    elif operation == "balance":
        account.balance_inquiry()
    elif operation == "get":
        print("Balance:", account.get_balance())
    elif operation == "set":
        amount = float(input("Enter Amount to set"))
        account.set_balance(amount)