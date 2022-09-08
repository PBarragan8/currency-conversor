coinObj  = {
    usdToArs: 286,
    eurToArs: 305,
    yuanToArs: 20,
    bolToArs: 10,
}

const conversor = (coinZeroToArs, currencyOneToArs, amountCoinZero) => {
   var amountCoinOne = (coinZeroToArs/currencyOneToArs) * amountCoinZero;
   return amountCoinOne;
}


console.log(conversor(coinObj.yuanToArs, coinObj.bolToArs, 3)); 
