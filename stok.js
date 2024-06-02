// stok.js

// Object to store product stock
var stock = {
    gunting: 15,
    KursiRoda: 32,
    Pinset: 22,
    // Add other products and their stock here
};

// Function to update product stock
function updateStock(product) {
    if (stock.hasOwnProperty(product)) {
        if (stock[product] > 0) {
            stock[product] -= 1;
            updateStockDisplay(product, stock[product]); // Call the function to update the stock display in index.html
            console.log("Stock updated for " + product + ": " + stock[product]); // Check if stock is being updated
        } else {
            console.error("Stock is empty for " + product); // Log an error if stock is empty
            alert("Maaf, stok produk habis!");
        }
    } else {
        console.error("Product not found: " + product); // Log an error if product is not found in the stock object
    }
}

// Function to get product stock
function getStock(product) {
    if (stock.hasOwnProperty(product)) {
        return stock[product];
    } else {
        console.error("Product not found: " + product); // Log an error if product is not found in the stock object
        return null;
    }
}

// Function to update the stock display in index.html
function updateStockDisplay(product, newStock) {
    var stockElement = document.getElementById(product + "Stock");
    if (stockElement) {
        stockElement.textContent = newStock;
        console.log("Stock display updated for " + product + ": " + newStock); // Check if stock display is being updated
    } else {
        console.error("Stock display element not found for " + product); // Log an error if stock display element is not found
    }
}
