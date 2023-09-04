const coffeeMenu = require("./coffee_data");


// 2. Print an array of all the drinks on the menu.

let drinksArray = [];

for (let i=0; i < coffeeMenu.length; i++) {
    
    drinksArray.push(coffeeMenu[i].name);
    
}

console.log(drinksArray);

// 3. Print an array of drinks that cost 5 and under.
let drinksUnderFive = [];

for (let i=0; i < coffeeMenu.length; i++) {
    if (coffeeMenu[i].price <= 5) {
        drinksUnderFive.push(coffeeMenu[i].name);
    }
}

console.log(drinksUnderFive)



// 4. Print an array of drinks that are priced at an even number.
let evenPricedDrinks = [];

for (let i=0; i < coffeeMenu.length; i++) {
    if (coffeeMenu[i].price % 2 === 0) {
        evenPricedDrinks.push(coffeeMenu[i].name);
    }
}

console.log(evenPricedDrinks)


// 5. Print the total if you were to order one of every drink.
let totalPriceOfDrinks = 0;

for (let i=0; i < coffeeMenu.length; i++) {

    totalPriceOfDrinks += coffeeMenu[i].price;
}

console.log(totalPriceOfDrinks)
// 6. Print an array with all the drinks that are seasonal.
let seasonalDrinks = [];

for (let i=0; i < coffeeMenu.length; i++) {

    if (coffeeMenu[i].seasonal === true) {
        seasonalDrinks.push(coffeeMenu[i].name)
    }
}

console.log(seasonalDrinks)

// 7. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".

for (let i=0; i < coffeeMenu.length; i++) {

    if (coffeeMenu[i].seasonal === true) {
        console.log(coffeeMenu[i].name + " " + "with imported beans")
    }
}
