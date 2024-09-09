function CalculateCart(Cart) {
    let TotalCost = 0
    
    for (const Product of Cart) {
        TotalCost += Product.Price * Product.Quantity;
    }

    if (TotalCost >= 100) {
        TotalCost *= 0.9;
    }

    return TotalCost
}

const ShoppingCart = [
    { ProductName: "T-shirt", Price: 200, Quantity: 2 },
    { ProductName: "Jeans", Price: 500, Quantity: 1 },
    { ProductName: "Hat", Price: 150, Quantity: 1 },
    { ProductName: "Socks", Price: 50, Quantity: 3 },  
]

const Total = CalculateCart (ShoppingCart);
console.log("Total:"  + Total + "UAH")