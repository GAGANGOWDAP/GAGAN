function checkInventory(productName, quantity) {
    
    if (quantity < 10) {
        console.log(`Product: ${productName} - Alert: Restock Immediately`);
    } else if (quantity >= 10 && quantity <= 20) {
        console.log(`Product: ${productName} - Alert: Stock is Low`);
    } else {
        console.log(`Product: ${productName} - Inventory Level Adequate`);
    }
}

checkInventory("Apples", 5);   
checkInventory("Bananas", 15);
checkInventory("Oranges", 25); 
