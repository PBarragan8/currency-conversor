var valuePeso = 1;
var valueDolar = 286;
var valueEuro = 305;

const currencyEuroDolar = (valueDolar, valueEuro, valuePeso, amount) => {
    return  (valuePeso/valueDolar) / (valuePeso/valueEuro) * (amount)
}


const currencyDolarEuro = (valueDolar, valueEuro, valuePeso, amount) => {
    return  (valuePeso/valueEuro) / (valuePeso/valueDolar) * (amount)
}


const currencyPesoDolar= (valueDolar, valueEuro, valuePeso, amount) => {
    return    valueDolar * (amount)
}


const currencyPesoEuro= (valueDolar, valueEuro, valuePeso, amount) => {
    return    valueEuro * (amount)
}


console.log(currencyPesoEuro(valueDolar, valueEuro, valuePeso, 2));//Peso a Euro
console.log(currencyPesoDolar(valueDolar, valueEuro, valuePeso, 2));//Peso a Dolar
console.log(currencyDolarEuro(valueDolar, valueEuro, valuePeso, 2));//Dolar a Euro
console.log(currencyEuroDolar(valueDolar, valueEuro, valuePeso, 2));//Euro a Dolar