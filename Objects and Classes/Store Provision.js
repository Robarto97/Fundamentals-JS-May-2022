function storeProvision(currStock, orderList) {
    let storeProducts = {};
    let currentL = currStock.length;
    let orderListL = orderList.length; 

    for(let i =0; i<currentL;i+=2){
        let product = currStock[i];
        storeProducts[product] = Number(currStock[i+1])
    }
    for(let i = 0; i<orderListL;i+=2){
        let product = orderList[i];
        if(!storeProducts.hasOwnProperty(product)){
            storeProducts[product] = 0;
        }
        storeProducts[product] +=Number(orderList[i+1]);
    }
    for(let product in storeProducts){
        console.log(`${product} -> ${storeProducts[product]}`);
    }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
