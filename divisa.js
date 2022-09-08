coinObj  = {
    usdToArs: 286,
    eurToArs: 305,
    yuanToArs: 20,
    bolToArs: 10,
}

function conversor (coinZeroToArs, currencyOneToArs, amountCoinZero) {
    if (typeof coinZeroToArs === "number" &&
        typeof currencyOneToArs === "number" &&
        typeof amountCoinZero === "number" ) {
        var amountCoinOne = (coinZeroToArs/currencyOneToArs) * amountCoinZero;
        return amountCoinOne;
    } else {
        throw new Error ("only numbers");
    }
}


console.log(conversor(coinObj.bolToArs, coinObj.yuanToArs, 2));

