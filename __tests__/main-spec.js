const {countProducts,fetchProduct,generateReceipt,countTotalPriceInput,assmble,generateReceipts} = require('../main');

it ('should count products', () => {
    //given 
    const codes = ['0003','0002','0003'];
    //when
    const countedCodes = countProducts(codes);
    console.log(countedCodes);
    //then 
    expect(countedCodes[0].count).toBe(2);
});

it ('should fetch product', () => {
    //given
    const db = [{"id": "0001", "name" : "Coca Cola", "price": 3},
                {"id": "0002", "name" : "Diet Coke", "price": 4}];
    const code = "0001";
    //when 
    let productInfo = fetchProduct(code, db);
    console.log(productInfo);
    //then
    expect(productInfo.name).toBe("Coca Cola");
})

it ('should generate receipt items', () => {
    //given
    const codes = ['0001','0002','0001'];
    
    //when 
    let productInfo = generateReceipt(codes);
    console.log(productInfo);
    
})

it ('should generate receipt items', () => {
    //given
    const items = [ { code: '0001', count: 2, name: 'Coca Cola', price: 3 },
                    { code: '0002', count: 1, name: 'Diet Coke', price: 4 } ];
    //when 
    let totalPrice = countTotalPriceInput(items);
    console.log(totalPrice);
    
})

it ('should generate receipt items', () => {
    //given
    const productsInfo = [ { code: '0001', count: 2, name: 'Coca Cola', price: 3 },
                    { code: '0002', count: 1, name: 'Diet Coke', price: 4 } ];
    const totalPrice = 10;
    //when 
    let receipts = assmble(totalPrice, productsInfo);
    console.log(receipts);
    
})

it ('should generate receipt items', () => {
    //given
    const codes = ['0001','0002','0001'];
    //when 
    let receipts = generateReceipts(codes);
    console.log(receipts);
    
})