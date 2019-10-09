
// Задание 1 
let currencySet = new Set(["USD", "EUR", "BYN"]);

// Задание 2
currencySet.forEach(currency => {
    console.log(currency)
})

// Задание 3
currencySet.add('RUB');
currencySet.add('BYN');
currencySet.add('GBP', 'JPY');

currencySet.forEach(currency => {
    console.log(currency)
})

// Задание 4
console.log("Set has USD value: " + currencySet.has("USD"));

currencySet.delete("USD");
console.log("Set has USD value: " + currencySet.has("USD"));

// Задание 5
let currencyArray = Array.from(currencySet); 
console.log(chance.pickone(currencyArray));
console.log(chance.pickset(currencyArray, chance.integer({min: 1, max: currencySet.size})));

// Задание 6