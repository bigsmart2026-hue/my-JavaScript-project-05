function countOutOfStock() {
    let stock = [10, 0, 5, 0, 8, 0, 3];
    let count = 0;

    for (let i = 0; i < stock.length; i++) {
        if (stock[i] === 0) {
            count++;
        }
    }

    console.log("Number of items out of stock: " + count);
}

countOutOfStock();