function atmWithdrawal(balance, amount) {
    
    if (amount % 10 !== 0) {
        return "Error: The requested amount must be in multiples of $10.";
    }
    
    if (amount > 500) {
        return "Error: The requested amount exceeds the $500 transaction limit.";
    }
   
    if (amount > balance) {
        return "Error: Insufficient funds in the account.";
    }
    
    balance -= amount; 
    return `Success: You have withdrawn $${amount}. Your new balance is $${balance}.`;
}


console.log(atmWithdrawal(1000, 30));   
console.log(atmWithdrawal(1000, 600));  
console.log(atmWithdrawal(1000, 400));  
console.log(atmWithdrawal(300, 400));   
