/*---------------------------------ARRAYS--------------------------------------------*/
/*--------------------------------------------------------------------------------- */

let heroes = ["ironman", "thor", "superman", "antman", "spiderman", "thor", "deadpool"];
console.log(heroes);

let countries = ["Pakistan", "India", "Ireland", "United States", "United Kingdom"];
console.log(countries);

console.log(heroes[4]);             //printing a specific item at a specific index in an array;

heroes[2] = 66;                     //changing an element of an array at a specific index; we can change array items because array are mutable;

///---loops over an ARRAYS---
//those components in JS on which loops can be applied. (strings, objects, arrays etc) are called iteraables;



//for loop on array (heroes) to print each value of the array in a separate line.
for (let index=0; index < heroes.length; index++) {
    console.log(heroes[index]);
}














