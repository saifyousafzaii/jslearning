/*---------------------------------ARRAYS--------------------------------------------*/
/*--------------------------------------------------------------------------------- */

let heroes = ["ironman", "thor", "superman", "antman", "spiderman", "thor", "deadpool"];

let countries = ["Pakistan", "India", "Ireland", "United States", "United Kingdom"];
/*
console.log(heroes[4]);      //printing a specific item at a specific index in an array;
*/

/*
heroes[2] = `superman2`;                     //changing an element of an array at a specific index; we can change array items because array are mutable;
*/

///---loops over an ARRAYS---
//those components in JS on which loops can be applied. (strings, objects, arrays etc) are called iteraables;



//for loop on array (heroes) to print each value of the array in a separate line.
/*
for (let i=0; i < heroes.length; i++) {                 // index = 0 so we start from the index 0 and we keep the index < heroes.length because index starts from 0 while length starts form 1.
    console.log(heroes[i]);                                     // if you want to keep index <= heroes.length then you have to initialize the index with value 1.
}
*/


//--doing the same exact thing using for-of loop--

/*
console.log("\n \n FOR-OF loop is applied on the heroes array here \n\n");
let k=0;
for (let val of heroes){

    console.log(val.toUpperCase());
    k++;
}
*/

//--doing this using for-in loop--

/*
console.log(`\n\nFOR-IN loop is applied on array by the name countries\n\n`)
for (let j in countries){
    console.log(countries[j].toUpperCase());            //printed the values and converted them to upper case.
}
*/

/*
let marks = [2,4,6,8,10,12,14];
let sum=0;
for(let val of marks){
    sum += val;                     //sum = sum + val;
}
let avg = sum/marks.length;
console.log(`sum of the array: ${sum}`);
console.log(`\nAverage of the array : ${sum}/${marks.length} => ${avg}`);          //finding the avg of a few numbers using for-of loop;
*/

//---practice quesstions--
//--take an array with prices of different items in it, alter it and print it with the prices but the 10% off is applied on each price;


let price = [250, 640, 300, 900, 50] 

/*
let i = 0;                                                     //this variable increases with each loop being executed, which means that it indirectly tracks the index;

for (let val of price){                                       //val variable will navigate through each value of the array named price;
   console.log(`value of ${i} = ${val}`);                    // this line prints the index and the value of each item of the array;
let offer = (val/100)*10;
    price[i] = price[i] - offer;                             //this gives us the discounter price of the items; by getting the item on that specific index and subtracting the discounted price from it and storing the discounted value in the array;
console.log(`Discounter Price : ${price[i]}`);               //prints the final version of array which have the discrounted price here;
        i++;
}
*/

/*let offer;
for (let i=0; i < price.length; i++ ){
    console.log(`${i} : ${price[i]}`);
    offer = price[i]/10;
    price[i] -= offer;
    console.log(`Discount Price : ${price[i]}`);
}
console.log(price);                             // this function takes the prices in the array and prints them with a 10% off on them.
*/





