//--------------------for loop------------------------

//---for loop for printing "saif yousafzai" 100 times.-----

/*
 for (let i=1; i<=100; i++) {
     console.log("saif yousafzai");
 }

 console.log("the loop has ended on 100 times");
*/

//_________________________________________________________________________

//---sum of 1 to 5-----

/*
let sum = 0;

for (let i=1; i<=5; i++) {
    sum = sum + i;
    console.log("i at this stage = ", i, "  and sum = ", sum);
}

console.log("total sum = ", sum);
*/


/*____________________________________________________________________________________________________
____________________________________________________________________________________________________*/


//--------------------while loop-------------------------------

//---print 1 to 5 in while loop---

/*
let i=1;
while(i<=5){
    console.log("i =", i);
    i++;
}
console.log(" ")
*/

//-------------------do-while loop------------------------------

//print 1-5 using do-while
/*
let j=1;

do{
    console.log("j =", j)
    j++;
} while (j<=5);
*/


//--------------------for-of loop-------------------------------
/* its used to apply loop on string arrays*/

//---Printing each character of a string in separate line using a loop and count the number of characters in the string---

/*
let str = "saif yousafzai";
let length = 0;

for(let val of str){                        // val variable here is use to store each value present on each index of the string and it will keep printing till the last index value of the string
    console.log("val =", val);
    length++;
}
console.log("String Length =", length);
*/

//-------------------for-in loop----------------------------------
/* this is used for objects mostly */

//---printing the key names and values in an object using for-in loop---------

/*
let stud = {
    Name : "saif yousafzai",
    age : 24,
    cgpa : 1.9,
    isPass : false,

};

console.log(`object stud`)

for (let k in stud) {
    console.log(k,":", stud[k]);
}
*/

//--practice questions.

//printing even numbers using for loop & if else statements.
/*
for (i=0;i<=100;i=i+2){
    if(i % 2 === 0){
        console.log(i);
    }
}
*/
//guessing game (guesing the number until the correct one is entered in the prompt)

/*
let gameNum = 12;
let userNum = prompt("enter the game number",);

while(userNum != gameNum) {

    userNum = prompt("Please Try Again");

};

alert("Congrats");
*/

//--------------------------string----------------------------------------------
//types of strings.

let strr = "string with double qoutes, string0";              //3 ways to create a string
let str1 = 'string with single qoutes, string1';
let str2 =`string with backticks, string 2`;

console.log(strr, "\n", str1, "\n", str2);           //(escape characters) \n = shift to new line || \t space equivalent of a "tab"
//alert(str.length);                                  //calculates the number of chars in a string
//alert(str[4]);                                      //gives the index location of a charecter.

//---template litterals---
//mostly used for putting variables into the strings. (the vairables are printed as string, regardless of their datatypes)

/*
let obj = {
    item : "pen",
    price : 100,
};

alert(`the cost of ${obj.item} is ${obj.price} rupees` );             //practical example of using template litteral by printing the variables in the string
//the phenomenon of adding placeholders (for variables) is called "string interpolation"
*/

//-----------------------------string methods in JS---------------------
// making JS do something for us. "string methods" means a method which manipulate a string for us.

let newStr = str2.toUpperCase();   /* str2.toUpperCase is a string method here. but we will have to declare a new string in order to get the new value because it doesn't change the original string. it manipulates the string and puts the output in a new string*/
console.log(str2,"\n",newStr);      //strings are immutable in JS, means the original string cannot be changed.

let nwstr = newStr.toLocaleLowerCase();
console.log(nwstr);
clearInterval
//--trim method--

let strr1 = "    this is a long string      ";

let newStrr = strr1.trim();
console.log(strr1, "\n", newStrr);

//--slice method--

newStrr = strr1.slice(3,17);             // the second index is non-inclusive and the second index parameter is optional, if you dont include the second index, you get the remaining string after the first index.
console.log(newStrr);

//--concatination--
//combining the two strings.

let concat = strr1.concat(str2);
console.log("\n", concat)
//you can also do this with the following method.

concatt = strr1 + str1;
console.log(concatt, "\nprinted with string concatination")

//--replace a certain part of string with another--
// called str.replace.  {(consol.log(str.replace("existing val", "value to be replaced with"))}

console.log(strr1.replace("string with double qoutes", "hello"));

console.log(strr1);

//--find a character at a certain index and return it--
//<string name>.charAt(index value);

console.log(strr1.charAt(5));         //this will output g;

/* practice question */
//get a full name from the user and generate a username for them

let user = prompt("enter your full name");
let userName = user.replace(" ","");

console.log(`the user name for You is:\t @${userName}${user.length}`);















