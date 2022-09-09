// que se importe desde el jobs con los valores a ejecutar
// en este archivo deberia quedar solo la funcion
function conversor(coinZero, coinOne, amountCoinZero) {
  if (
    typeof coinZero !== "string" ||
    typeof coinOne !== "string" ||
    typeof amountCoinZero !== "number"
  ) {
    throw new Error("Params are bad");
  }
  const coinObj = {
    usdToArs: 286,
    eurToArs: 305,
    yuanToArs: 20,
    bolToArs: 10,
  };

  const coinZeroToArs = coinObj[coinZero];
  const currencyOneToArs = coinObj[coinOne];

  if (!coinZeroToArs || !currencyOneToArs) {
    throw new Error("Currency does not exist");
  }

  var amountCoinOne = (coinZeroToArs / currencyOneToArs) * amountCoinZero;
  return amountCoinOne;
}
// que entre por el string del nombre de la moneda y vos busques el precio
console.log(conversor("bolToArs", "yuanToArs", 3));
