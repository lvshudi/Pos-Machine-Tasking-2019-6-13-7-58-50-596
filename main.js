function countProducts(codes) {
    let map = new Map();
    for (let i = 0; i < codes.length; i++) {
        let code = codes[i];
        if (!map.has(code)) {
            let item = {
                code: code,
                count: 1
            };
            map.set(code, item);
        } else {
            let item = map.get(code);
            item.count++;
            map.set(code, item)
        }
    }
    let items = [];
    map.forEach(function (item, code) {
        items.push(item);
    })
    return items;
}

let db = [
    { "id": "0001", "name": "Coca Cola", "price": 3 },
    { "id": "0002", "name": "Diet Coke", "price": 4 },
    { "id": "0003", "name": "Pepsi-Cola", "price": 5 },
    { "id": "0004", "name": "Mountain Dew", "price": 6 },
    { "id": "0005", "name": "Dr Pepper", "price": 7 },
    { "id": "0006", "name": "Sprite", "price": 8 },
    { "id": "0007", "name": "Diet Pepsi", "price": 9 },
    { "id": "0008", "name": "Diet Mountain Dew", "price": 10 },
    { "id": "0009", "name": "Diet Dr Pepper", "price": 11 },
    { "id": "0010", "name": "Fanta", "price": 12 }
];

function fetchProduct(code) {
    let productInfo;
    for (let index = 0; index < db.length; index++) {
        let product = db[index];
        if (code === product.id) {
            productInfo = {
                name: product.name,
                price: product.price
            };
            break;
        }
    }
    return productInfo;
}

function generateReceipt(codes) {
    let items = countProducts(codes);
    let productsInfo = [];
    for (let index = 0; index < items.length; index++) {
        let item = items[index];
        let code = item.code;

        let productInfo = fetchProduct(code);
        productInfo.count = item.count;
        productsInfo.push(productInfo);
    }
    return productsInfo;
}

function countTotalPriceInput(productsInfo) {
    let totalPrice = 0;
    productsInfo.forEach(element => {
        totalPrice += element.price * element.count;
    });
    return totalPrice;
}

function assmble(totalPrice, productsInfo) {
    let str = "Receipts\n------------------------\n";
    productsInfo.forEach(element => {
        str += element.name + "\t" + element.count + "\t" + element.price + "\n";
    });
    str += "------------------------\nPrice:  " + totalPrice;
    return str;
}

function generateReceipts(codes) {
    let receiptItems = generateReceipt(codes);
    let totalPrice = countTotalPriceInput(receiptItems);
    let result = assmble(totalPrice, receiptItems);
    return result;
}

// function countOneProduct(code, codes) {
//     let times=0;
//     for (let index = 0; index < codes.length; index++) {
//         if(code == codes[index]) {
//             times++;
//         }
//     }
//     return times;
// }

module.exports = {
    countProducts,
    fetchProduct,
    generateReceipt,
    countTotalPriceInput,
    assmble,
    generateReceipts
};