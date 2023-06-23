function getTotalPrice(groceries) {
    const prices = groceries.map(item => item.quantity * item.price);
    const total = prices.reduce((acc, curr) => acc + curr, 0);
    return total;
  }
  const groceries1 = [
    { product: "Milk", quantity: 1, price: 1.50 }
  ];
  
  console.log(getTotalPrice(groceries1)); 
  
  const groceries2 = [
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Cereals", quantity: 1, price: 2.50 },
  ];
  
  console.log(getTotalPrice(groceries2)); 
  
  const groceries3 = [
    { product: "Milk", quantity: 3, price: 1.50 }
  ];
  
  console.log(getTotalPrice(groceries3)); 